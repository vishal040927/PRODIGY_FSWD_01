import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const login = async (e) => {

        e.preventDefault();

        try {

            const res = await api.post("/auth/login", form);

            const data = res.data;

            // ✅ STORE ALL USER DATA PROPERLY
            localStorage.setItem("token", data.token);
            localStorage.setItem("name", data.name);
            localStorage.setItem("email", data.email);
            localStorage.setItem("role", data.role);
            localStorage.setItem("phoneNumber", data.phoneNumber);

            alert("Login Successful");

            // ✅ ROLE BASED REDIRECT
            if (data.role === "ADMIN") {
                navigate("/admin");
            }
            else if (data.role === "DOCTOR") {
                navigate("/doctor");
            }
            else {
                navigate("/dashboard");
            }

        } catch (err) {
            console.log(err);
            alert("Invalid credentials");
        }
    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-4">

                    <div className="card p-4 shadow">

                        <h3 className="text-center mb-3">
                            Login
                        </h3>

                        <form onSubmit={login}>

                            <input
                                className="form-control mb-3"
                                placeholder="Email"
                                name="email"
                                value={form.email}
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

                            <button className="btn btn-primary w-100">
                                Login
                            </button>

                        </form>

                        <hr />

                        <p className="text-center">
                            New user?
                        </p>

                        <Link
                            to="/register"
                            className="btn btn-success w-100"
                        >
                            Register
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Login;