package hospital_management.backend.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class AppointmentRequest {

    private Long doctorId;

    private LocalDate appointmentDate;

    private String patientEmail;

}