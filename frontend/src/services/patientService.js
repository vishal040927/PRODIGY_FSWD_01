import api from "./api";

export const getPatients = () => {
    return api.get("/patients");
};

export const addPatient = (patient) => {
    return api.post("/patients", patient);
};

export const updatePatient = (id, patient) => {
    return api.put(`/patients/${id}`, patient);
};

export const deletePatient = (id) => {
    return api.delete(`/patients/${id}`);
};