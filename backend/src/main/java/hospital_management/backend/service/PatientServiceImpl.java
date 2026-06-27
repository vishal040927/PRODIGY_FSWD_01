package hospital_management.backend.service;

import hospital_management.backend.entity.Patient;
import hospital_management.backend.repository.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService {

    private final PatientRepository patientRepository;

    public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    public Patient addPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    @Override
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @Override
    public Patient getPatientById(Long id) {

        return patientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Patient not found"));

    }

    @Override
    public Patient updatePatient(Long id, Patient patient) {

        Patient existingPatient = getPatientById(id);

        existingPatient.setFirstName(patient.getFirstName());
        existingPatient.setLastName(patient.getLastName());
        existingPatient.setAge(patient.getAge());
        existingPatient.setGender(patient.getGender());
        existingPatient.setBloodGroup(patient.getBloodGroup());
        existingPatient.setPhone(patient.getPhone());
        existingPatient.setEmail(patient.getEmail());
        existingPatient.setAddress(patient.getAddress());

        return patientRepository.save(existingPatient);
    }

    @Override
    public void deletePatient(Long id) {

        Patient patient = getPatientById(id);

        patientRepository.delete(patient);

    }
}