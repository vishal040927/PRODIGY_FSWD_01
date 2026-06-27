import { useEffect, useState } from "react";
import api from "../services/api";

function Doctors() {

    const [doctors, setDoctors] = useState([]);

    const [doctor, setDoctor] = useState({
        name: "",
        email: "",
        phone: "",
        specialization: "",
        qualification: "",
        experience: ""
    });

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {

        try {

            const response = await api.get("/doctors");

            setDoctors(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setDoctor({
            ...doctor,
            [e.target.name]: e.target.value
        });

    };

    const addDoctor = async (e) => {

        e.preventDefault();

        try {

            await api.post("/doctors", doctor);

            alert("Doctor Added Successfully");

            setDoctor({
                name: "",
                email: "",
                phone: "",
                specialization: "",
                qualification: "",
                experience: ""
            });

            fetchDoctors();

        } catch (error) {

            console.log(error);

            alert("Unable to Add Doctor");

        }

    };

    const deleteDoctor = async (id) => {

        try {

            await api.delete(`/doctors/${id}`);

            alert("Doctor Deleted Successfully");

            fetchDoctors();

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container mt-4">

            <h2 className="text-center mb-4">

                Doctor Management

            </h2>

            <div className="card shadow p-4 mb-4">

                <form onSubmit={addDoctor}>

                    <input
                        className="form-control mb-3"
                        placeholder="Doctor Name"
                        name="name"
                        value={doctor.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Email"
                        name="email"
                        value={doctor.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Phone Number"
                        name="phone"
                        value={doctor.phone}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Specialization"
                        name="specialization"
                        value={doctor.specialization}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Qualification"
                        name="qualification"
                        value={doctor.qualification}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        className="form-control mb-3"
                        placeholder="Experience (Years)"
                        name="experience"
                        value={doctor.experience}
                        onChange={handleChange}
                        required
                    />

                    <button
                        className="btn btn-success w-100"
                    >

                        Add Doctor

                    </button>

                </form>

            </div>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Specialization</th>
                        <th>Qualification</th>
                        <th>Experience</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        doctors.map((doc) => (

                            <tr key={doc.id}>

                                <td>{doc.id}</td>

                                <td>{doc.name}</td>

                                <td>{doc.email}</td>

                                <td>{doc.phone}</td>

                                <td>{doc.specialization}</td>

                                <td>{doc.qualification}</td>

                                <td>{doc.experience}</td>

                                <td>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteDoctor(doc.id)}
                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default Doctors;