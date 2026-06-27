import { Link } from "react-router-dom";

function Sidebar() {

    const role = localStorage.getItem("role");

    return (

        <div
            className="bg-dark text-white p-3"
            style={{ width: "250px", minHeight: "100vh" }}
        >

            <h4 className="mb-4">
                Menu
            </h4>

            <ul className="nav flex-column">

                {role === "ADMIN" && (

                    <>

                        <li className="nav-item mb-3">

                            <Link
                                className="nav-link text-white"
                                to="/dashboard"
                            >
                                Dashboard
                            </Link>

                        </li>

                        <li className="nav-item mb-3">

                            <Link
                                className="nav-link text-white"
                                to="/patients"
                            >
                                Patients
                            </Link>

                        </li>

                        <li className="nav-item mb-3">

                            <Link
                                className="nav-link text-white"
                                to="/doctors"
                            >
                                Doctors
                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link
                                className="nav-link text-white"
                                to="/appointments"
                            >
                                Appointments
                            </Link>

                        </li>

                    </>

                )}

            </ul>

        </div>

    );

}

export default Sidebar;
