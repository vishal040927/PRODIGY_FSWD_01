import { useEffect, useState } from "react";
import api from "../services/api";

function DoctorDashboard() {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {

        try {
            const res = await api.get("/appointments");
            setAppointments(res.data);

        } catch (err) {
            console.log("Error loading appointments", err);
        }
    };

    return (

        <div className="container mt-4">

            <div className="card shadow p-4">

                <h3 className="text-primary mb-3">
                    👨‍⚕️ Doctor Dashboard
                </h3>

                <h5 className="mb-3">
                    Total Appointments: {appointments.length}
                </h5>

                <table className="table table-bordered table-hover">

                    <thead className="table-dark">

                        <tr>
                            <th>#</th>
                            <th>Patient Name</th>
                            <th>Doctor Name</th>
                            <th>Appointment Date</th>
                        </tr>

                    </thead>

                    <tbody>

                        {appointments.length === 0 ? (

                            <tr>
                                <td colSpan="4" className="text-center">
                                    No Appointments Found
                                </td>
                            </tr>

                        ) : (

                            appointments.map((a, index) => (

                                <tr key={a.id}>

                                    <td>{index + 1}</td>

                                    {/* FIXED: patient name */}
                                    <td>{a.patient?.name}</td>

                                    {/* doctor name */}
                                    <td>Dr. {a.doctor?.name}</td>

                                    {/* date */}
                                    <td>{a.appointmentDate}</td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );
}

export default DoctorDashboard;