import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function ViewDoctors() {

    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {

        try {

            const response = await api.get("/doctors", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            setDoctors(response.data);

        } catch (error) {

            console.log(error);
            alert("Unable to load doctors.");

        }

    };

    const bookAppointment = (doctor) => {

        navigate("/appointments", {
            state: {
                doctorId: doctor.id,
                doctorName: doctor.name
            }
        });

    };

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2 className="text-primary">
                    👨‍⚕️ Available Doctors
                </h2>

                <Link
                    to="/dashboard"
                    className="btn btn-secondary"
                >
                    ← Back
                </Link>

            </div>

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h5 className="mb-0">
                        Doctors List
                    </h5>

                </div>

                <div className="card-body">

                    <table className="table table-hover table-striped align-middle">

                        <thead className="table-dark">

                            <tr>

                                <th>ID</th>
                                <th>Name</th>
                                <th>Specialization</th>
                                <th>Qualification</th>
                                <th>Experience</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                doctors.length === 0 ?

                                    (

                                        <tr>

                                            <td
                                                colSpan="8"
                                                className="text-center text-muted"
                                            >
                                                No doctors available.
                                            </td>

                                        </tr>

                                    )

                                    :

                                    doctors.map((doctor) => (

                                        <tr key={doctor.id}>

                                            <td>{doctor.id}</td>

                                            <td>
                                                <strong>
                                                    Dr. {doctor.name}
                                                </strong>
                                            </td>

                                            <td>
                                                <span className="badge bg-info text-dark">
                                                    {doctor.specialization}
                                                </span>
                                            </td>

                                            <td>{doctor.qualification}</td>

                                            <td>{doctor.experience} Years</td>

                                            <td>{doctor.email}</td>

                                            <td>{doctor.phone}</td>

                                            <td>

                                                <button
                                                    className="btn btn-success btn-sm"
                                                    onClick={() => bookAppointment(doctor)}
                                                >
                                                    📅 Book
                                                </button>

                                            </td>

                                        </tr>

                                    ))

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default ViewDoctors;