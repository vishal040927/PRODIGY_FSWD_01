import api from "./api";

export const getDoctors = () => {
    return api.get("/doctors");
};

export const addDoctor = (doctor) => {
    return api.post("/doctors", doctor);
};

export const updateDoctor = (id, doctor) => {
    return api.put(`/doctors/${id}`, doctor);
};

export const deleteDoctor = (id) => {
    return api.delete(`/doctors/${id}`);
};