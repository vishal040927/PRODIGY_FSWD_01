import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AdminDashboard() {

    const navigate = useNavigate();

    const [doctors, setDoctors] = useState([]);

    const [doctor, setDoctor] = useState({
        name: "",
        email: "",
        phone: "",
        specialization: "",
        qualification: "",
        experience: "",
        password: ""
    });

    useEffect(() => {
        loadDoctors();
    }, []);

    const loadDoctors = async () => {

        try {

            const res = await api.get("/doctors");

            setDoctors(res.data);

        } catch (err) {

            console.log(err);

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
                experience: "",
                password: ""
            });

            loadDoctors();

        } catch (err) {

            console.log(err);

            alert(
                err.response?.data?.message ||
                "Failed to add doctor"
            );

        }

    };

    const logout = () => {

        localStorage.clear();

        navigate("/");

    };

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-4">

                <h2>👑 Admin Dashboard</h2>

                <button
                    className="btn btn-danger"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

            {/* ADD DOCTOR */}

            <div className="card shadow p-4 mb-5">

                <h4 className="mb-3">
                    Add Doctor
                </h4>

                <form onSubmit={addDoctor}>

                    <div className="row">

                        <div className="col-md-6 mb-3">

                            <input
                                className="form-control"
                                placeholder="Doctor Name"
                                name="name"
                                value={doctor.name}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <input
                                className="form-control"
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={doctor.email}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <input
                                className="form-control"
                                placeholder="Phone Number"
                                name="phone"
                                value={doctor.phone}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <input
                                className="form-control"
                                placeholder="Specialization"
                                name="specialization"
                                value={doctor.specialization}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <input
                                className="form-control"
                                placeholder="Qualification"
                                name="qualification"
                                value={doctor.qualification}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <input
                                className="form-control"
                                placeholder="Experience"
                                type="number"
                                name="experience"
                                value={doctor.experience}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-12 mb-3">

                            <input
                                className="form-control"
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={doctor.password}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>

                    <button
                        className="btn btn-primary"
                    >
                        Add Doctor
                    </button>

                </form>

            </div>

            {/* DOCTOR LIST */}

            <div className="card shadow p-4">

                <h4 className="mb-3">
                    Doctor List
                </h4>

                <table className="table table-bordered">

                    <thead className="table-dark">

                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Specialization</th>
                            <th>Qualification</th>
                            <th>Experience</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            doctors.map(doc => (

                                <tr key={doc.id}>

                                    <td>{doc.name}</td>

                                    <td>{doc.email}</td>

                                    <td>{doc.phone}</td>

                                    <td>{doc.specialization}</td>

                                    <td>{doc.qualification}</td>

                                    <td>{doc.experience} Years</td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default AdminDashboard;