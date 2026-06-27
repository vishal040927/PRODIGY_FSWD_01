import { Link } from "react-router-dom";

function Profile() {

    const name = localStorage.getItem("name") || "Unknown";
    const email = localStorage.getItem("email") || "Unknown";
    const phone = localStorage.getItem("phoneNumber") || "Unknown";
    const role = localStorage.getItem("role") || "Unknown";

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-7">

                    <div className="card shadow">

                        <div className="card-header bg-primary text-white">

                            <h3 className="mb-0">
                                My Profile
                            </h3>

                        </div>

                        <div className="card-body">

                            <table className="table table-bordered">

                                <tbody>

                                    <tr>

                                        <th width="30%">Name</th>

                                        <td>{name}</td>

                                    </tr>

                                    <tr>

                                        <th>Email</th>

                                        <td>{email}</td>

                                    </tr>

                                    <tr>

                                        <th>Phone Number</th>

                                        <td>{phone}</td>

                                    </tr>

                                    <tr>

                                        <th>Role</th>

                                        <td>{role}</td>

                                    </tr>

                                </tbody>

                            </table>

                            <div className="text-center mt-4">

                                <Link
                                    to="/dashboard"
                                    className="btn btn-primary"
                                >
                                    Back to Dashboard
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Profile;