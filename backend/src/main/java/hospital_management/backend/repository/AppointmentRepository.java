package hospital_management.backend.repository;

import hospital_management.backend.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    boolean existsByPatientId(Long patientId);

}