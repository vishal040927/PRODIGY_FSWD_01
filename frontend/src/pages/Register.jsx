import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const register = async (e) => {
        e.preventDefault();

        try {

            const response = await api.post("/auth/register", form);

            alert(response.data); // shows "Registration Successful"

            navigate("/");

        } catch (err) {

            console.log(err);

            alert(
                err.response?.data || "Registration Failed"
            );

        }
    };

    return (
        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow-lg">

                        <div className="card-header bg-success text-white text-center">

                            <h3>Register</h3>

                        </div>

                        <div className="card-body">

                            <form onSubmit={register}>

                                <input
                                    className="form-control mb-3"
                                    placeholder="Full Name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    className="form-control mb-3"
                                    placeholder="Email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    className="form-control mb-3"
                                    placeholder="Phone Number"
                                    name="phoneNumber"
                                    value={form.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    type="password"
                                    className="form-control mb-3"
                                    placeholder="Password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                />

                                <button className="btn btn-success w-100">
                                    Register
                                </button>

                            </form>

                            <div className="text-center mt-3">

                                <Link to="/">
                                    Already have an account? Login
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Register;