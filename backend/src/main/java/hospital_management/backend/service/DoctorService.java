package hospital_management.backend.service;

import hospital_management.backend.dto.DoctorRequest;
import hospital_management.backend.entity.Doctor;

import java.util.List;

public interface DoctorService {

    // Add doctor + create login account
    Doctor addDoctor(DoctorRequest request);

    List<Doctor> getAllDoctors();

    Doctor getDoctorById(Long id);

    Doctor updateDoctor(Long id, Doctor doctor);

    void deleteDoctor(Long id);
}