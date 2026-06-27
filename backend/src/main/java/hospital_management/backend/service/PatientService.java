package hospital_management.backend.service;

import hospital_management.backend.entity.Patient;

import java.util.List;

public interface PatientService {

    Patient addPatient(Patient patient);

    List<Patient> getAllPatients();

    Patient getPatientById(Long id);

    Patient updatePatient(Long id, Patient patient);

    void deletePatient(Long id);

}