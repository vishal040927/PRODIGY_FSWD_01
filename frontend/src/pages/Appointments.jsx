import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../services/api";

function Appointments() {

    const location = useLocation();
    const navigate = useNavigate();

    const [doctors, setDoctors] = useState([]);

    const [form, setForm] = useState({
        doctorId: "",
        appointmentDate: ""
    });

    // ✅ AUTO FILL SELECTED DOCTOR
    useEffect(() => {

        if (location.state?.doctorId) {

            setForm(prev => ({
                ...prev,
                doctorId: location.state.doctorId
            }));

        }

        fetchDoctors();

    }, []);

    const fetchDoctors = async () => {

        try {

            const res = await api.get("/doctors", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            setDoctors(res.data);

        } catch (err) {
            console.log(err);
        }

    };

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const bookAppointment = async (e) => {

        e.preventDefault();

        try {

            await api.post("/appointments", {
                doctorId: form.doctorId,
                patientEmail: localStorage.getItem("email"),
                appointmentDate: form.appointmentDate
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            alert("Appointment Booked Successfully");

            navigate("/dashboard");

        } catch (err) {

            console.log(err);
            alert("Failed to book appointment");

        }

    };

    return (

        <div className="container mt-4">

            <div className="card shadow p-4">

                <h3 className="text-primary mb-3">
                    📅 Book Appointment
                </h3>

                <form onSubmit={bookAppointment}>

                    {/* DOCTOR SELECT */}
                    <label className="form-label">Select Doctor</label>

                    <select
                        className="form-control mb-3"
                        name="doctorId"
                        value={form.doctorId}
                        onChange={handleChange}
                        required
                    >

                        <option value="">-- Select Doctor --</option>

                        {

                            doctors.map(doc => (

                                <option key={doc.id} value={doc.id}>

                                    Dr. {doc.name} ({doc.specialization})

                                </option>

                            ))

                        }

                    </select>

                    {/* DATE */}
                    <label className="form-label">Appointment Date</label>

                    <input
                        type="date"
                        className="form-control mb-3"
                        name="appointmentDate"
                        value={form.appointmentDate}
                        onChange={handleChange}
                        required
                    />

                    <button className="btn btn-success w-100">
                        Confirm Appointment
                    </button>

                </form>

            </div>

        </div>

    );

}

export default Appointments;