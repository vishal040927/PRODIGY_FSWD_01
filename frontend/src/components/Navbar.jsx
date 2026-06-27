import { Link } from "react-router-dom";

function Navbar() {

    const role = localStorage.getItem("role");
    const name = localStorage.getItem("name");

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("name");

        window.location.href = "/";

    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            <div className="container-fluid">

                <span className="navbar-brand">
                    Hospital Management System
                </span>

                <div className="d-flex align-items-center">

                    {role === "ADMIN" && (
                        <Link
                            to="/dashboard"
                            className="btn btn-outline-light me-2"
                        >
                            Dashboard
                        </Link>
                    )}

                    <Link
                        to="/doctors"
                        className="btn btn-outline-light me-2"
                    >
                        Doctors
                    </Link>

                    <Link
                        to="/patients"
                        className="btn btn-outline-light me-2"
                    >
                        Patients
                    </Link>

                    <Link
                        to="/appointments"
                        className="btn btn-outline-light me-3"
                    >
                        Appointments
                    </Link>

                    <span className="text-white me-3">
                        Welcome, {name}
                    </span>

                    <button
                        className="btn btn-light"
                        onClick={logout}
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;

