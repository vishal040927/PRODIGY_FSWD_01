import { useEffect, useState } from "react";
import api from "../services/api";

function Patients() {

    const [patients, setPatients] = useState([]);

    const [patient, setPatient] = useState({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        bloodGroup: "",
        phone: "",
        email: "",
        address: ""
    });

    useEffect(() => {
        loadPatients();
    }, []);

    const loadPatients = async () => {

        try {

            const response = await api.get("/patients");

            setPatients(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setPatient({
            ...patient,
            [e.target.name]: e.target.value
        });

    };

    const addPatient = async (e) => {

        e.preventDefault();

        try {

            await api.post("/patients", patient);

            alert("Patient Added Successfully");

            setPatient({
                firstName: "",
                lastName: "",
                age: "",
                gender: "",
                bloodGroup: "",
                phone: "",
                email: "",
                address: ""
            });

            loadPatients();

        } catch (error) {

            console.log(error);

            alert("Unable to add patient");

        }

    };

    const deletePatient = async (id) => {

        try {

            await api.delete(`/patients/${id}`);

            alert("Patient Deleted");

            loadPatients();

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container mt-4">

            <h2 className="text-center mb-4">
                Patient Management
            </h2>

            <div className="card shadow p-4 mb-4">

                <form onSubmit={addPatient}>

                    <div className="row">

                        <div className="col-md-6 mb-3">

                            <input
                                className="form-control"
                                placeholder="First Name"
                                name="firstName"
                                value={patient.firstName}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <input
                                className="form-control"
                                placeholder="Last Name"
                                name="lastName"
                                value={patient.lastName}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <input
                                className="form-control"
                                placeholder="Age"
                                name="age"
                                value={patient.age}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <select
                                className="form-control"
                                name="gender"
                                value={patient.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>

                        </div>

                        <div className="col-md-4 mb-3">

                            <input
                                className="form-control"
                                placeholder="Blood Group"
                                name="bloodGroup"
                                value={patient.bloodGroup}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <input
                                className="form-control"
                                placeholder="Phone"
                                name="phone"
                                value={patient.phone}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <input
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={patient.email}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="col-md-12 mb-3">

                            <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Address"
                                name="address"
                                value={patient.address}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                    <button className="btn btn-success w-100">

                        Add Patient

                    </button>

                </form>

            </div>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        patients.map((p) => (

                            <tr key={p.id}>

                                <td>{p.id}</td>

                                <td>
                                    {p.firstName} {p.lastName}
                                </td>

                                <td>{p.age}</td>

                                <td>{p.gender}</td>

                                <td>{p.phone}</td>

                                <td>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deletePatient(p.id)}
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

export default Patients;