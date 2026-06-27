package hospital_management.backend.service;

import hospital_management.backend.dto.AppointmentRequest;
import hospital_management.backend.entity.Appointment;
import hospital_management.backend.entity.Doctor;
import hospital_management.backend.entity.User;
import hospital_management.backend.repository.AppointmentRepository;
import hospital_management.backend.repository.DoctorRepository;
import hospital_management.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    private final AppointmentRepository repository;
    private final DoctorRepository doctorRepository;
    private final UserRepository userRepository;

    public AppointmentServiceImpl(
            AppointmentRepository repository,
            DoctorRepository doctorRepository,
            UserRepository userRepository) {

        this.repository = repository;
        this.doctorRepository = doctorRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<Appointment> getAllAppointments() {
        return repository.findAll();
    }

    @Override
    public Appointment addAppointment(AppointmentRequest request) {

        // Get logged-in user
        User patient = userRepository.findByEmail(request.getPatientEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Get doctor
        Doctor doctor = doctorRepository.findById(request.getDoctorId())
                .orElseThrow(() -> new RuntimeException("Doctor not found"));

        // One appointment per user rule
        if (repository.existsByPatientId(patient.getId())) {
            throw new RuntimeException("You already booked an appointment.");
        }

        // Create appointment (NO STATUS FIELD)
        Appointment appointment = Appointment.builder()
                .patient(patient)
                .doctor(doctor)
                .appointmentDate(request.getAppointmentDate())
                .build();

        return repository.save(appointment);
    }

    @Override
    public Appointment updateAppointment(Long id, Appointment appointment) {

        Appointment existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));

        existing.setDoctor(appointment.getDoctor());
        existing.setPatient(appointment.getPatient());
        existing.setAppointmentDate(appointment.getAppointmentDate());

        return repository.save(existing);
    }

    @Override
    public void deleteAppointment(Long id) {
        repository.deleteById(id);
    }
}