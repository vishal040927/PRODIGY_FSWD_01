package hospital_management.backend.service;

import hospital_management.backend.dto.DoctorRequest;
import hospital_management.backend.entity.Doctor;
import hospital_management.backend.entity.User;
import hospital_management.backend.repository.DoctorRepository;
import hospital_management.backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorServiceImpl implements DoctorService {

    private final DoctorRepository doctorRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DoctorServiceImpl(
            DoctorRepository doctorRepository,
            UserRepository userRepository,
            PasswordEncoder passwordEncoder
    ) {
        this.doctorRepository = doctorRepository;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // ==========================
    // ADD DOCTOR (MAIN LOGIC)
    // ==========================
    @Override
    public Doctor addDoctor(DoctorRequest request) {

        // check if email already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        // 1. Save Doctor entity
        Doctor doctor = Doctor.builder()
                .name(request.getName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .specialization(request.getSpecialization())
                .qualification(request.getQualification())
                .experience(request.getExperience())
                .build();

        Doctor savedDoctor = doctorRepository.save(doctor);

        // 2. Create User for login (DOCTOR ROLE)
        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .phoneNumber(request.getPhone())
                .password(passwordEncoder.encode(request.getPassword()))
                .role("DOCTOR")
                .build();

        userRepository.save(user);

        return savedDoctor;
    }

    // ==========================
    // GET ALL DOCTORS
    // ==========================
    @Override
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    // ==========================
    // GET BY ID
    // ==========================
    @Override
    public Doctor getDoctorById(Long id) {
        return doctorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Doctor not found"));
    }

    // ==========================
    // UPDATE
    // ==========================
    @Override
    public Doctor updateDoctor(Long id, Doctor doctor) {

        Doctor existing = doctorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Doctor not found"));

        existing.setName(doctor.getName());
        existing.setEmail(doctor.getEmail());
        existing.setPhone(doctor.getPhone());
        existing.setSpecialization(doctor.getSpecialization());
        existing.setQualification(doctor.getQualification());
        existing.setExperience(doctor.getExperience());

        return doctorRepository.save(existing);
    }

    // ==========================
    // DELETE
    // ==========================
    @Override
    public void deleteDoctor(Long id) {

        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Doctor not found"));

        // delete user login also
        userRepository.findByEmail(doctor.getEmail())
                .ifPresent(userRepository::delete);

        doctorRepository.deleteById(id);
    }
}