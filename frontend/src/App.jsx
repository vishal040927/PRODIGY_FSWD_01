import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ViewDoctors from "./pages/ViewDoctors";
import Appointments from "./pages/Appointments";

import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import PrivateRoute from "./components/PrivateRoute";

function App() {

    return (

        <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/dashboard" element={
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
            } />

            <Route path="/profile" element={
                <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            } />

            <Route path="/doctors" element={
                <PrivateRoute>
                    <ViewDoctors />
                </PrivateRoute>
            } />

            <Route path="/appointments" element={
                <PrivateRoute>
                    <Appointments />
                </PrivateRoute>
            } />

            <Route path="/doctor" element={
                <PrivateRoute>
                    <DoctorDashboard />
                </PrivateRoute>
            } />

            <Route path="/admin" element={
                <PrivateRoute>
                    <AdminDashboard />
                </PrivateRoute>
            } />

        </Routes>

    );
}

export default App;