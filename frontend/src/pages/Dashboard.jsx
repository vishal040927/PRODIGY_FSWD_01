import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const role = localStorage.getItem("role");
    const name = localStorage.getItem("name");

    const logout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (

        <div
            className="container-fluid py-5"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(to right, #e3f2fd, #ffffff)"
            }}
        >

            {/* Welcome Card */}

            <div className="card shadow-lg border-0 mb-5">

                <div
                    className="card-body text-white"
                    style={{
                        background: "linear-gradient(90deg,#0d6efd,#0dcaf0)",
                        borderRadius: "8px"
                    }}
                >

                    <h2 className="fw-bold">
                        🏥 Hospital Management System
                    </h2>

                    <h4 className="mt-3">
                        Welcome,
                        <span className="text-warning"> {name}</span>
                    </h4>

                    <p className="mb-0">
                        Manage your hospital services quickly and securely.
                    </p>

                </div>

            </div>

            {/* USER */}

            {role === "USER" && (

                <div className="row g-4">

                    <div className="col-md-4">

                        <div
                            className="card shadow h-100 text-center"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/profile")}
                        >

                            <div className="card-body">

                                <h1>👤</h1>

                                <h4 className="mt-3">
                                    My Profile
                                </h4>

                                <p className="text-muted">
                                    View and update your personal details.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div
                            className="card shadow h-100 text-center"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/doctors")}
                        >

                            <div className="card-body">

                                <h1>👨‍⚕️</h1>

                                <h4 className="mt-3">
                                    View Doctors
                                </h4>

                                <p className="text-muted">
                                    Browse available specialists and book appointments.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div
                            className="card shadow h-100 text-center"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/appointments")}
                        >

                            <div className="card-body">

                                <h1>📅</h1>

                                <h4 className="mt-3">
                                    Appointments
                                </h4>

                                <p className="text-muted">
                                    Book and manage your appointments.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            )}

            {/* DOCTOR */}

            {role === "DOCTOR" && (

                <div className="row justify-content-center">

                    <div className="col-md-5">

                        <div
                            className="card shadow text-center"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/doctor")}
                        >

                            <div className="card-body">

                                <h1>🩺</h1>

                                <h3 className="mt-3">
                                    Doctor Dashboard
                                </h3>

                                <p className="text-muted">
                                    View today's appointments and patients.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            )}

            {/* ADMIN */}

            {role === "ADMIN" && (

                <div className="row justify-content-center">

                    <div className="col-md-5">

                        <div
                            className="card shadow text-center"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/admin")}
                        >

                            <div className="card-body">

                                <h1>👑</h1>

                                <h3 className="mt-3">
                                    Admin Dashboard
                                </h3>

                                <p className="text-muted">
                                    Manage doctors and hospital records.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            )}

            {/* Logout */}

            <div className="text-center mt-5">

                <button
                    className="btn btn-danger btn-lg px-5"
                    onClick={logout}
                >
                    🚪 Logout
                </button>

            </div>

        </div>

    );

}

export default Dashboard;