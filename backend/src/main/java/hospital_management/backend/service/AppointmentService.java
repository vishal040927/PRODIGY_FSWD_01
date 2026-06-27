package hospital_management.backend.service;

import hospital_management.backend.dto.AppointmentRequest;
import hospital_management.backend.entity.Appointment;

import java.util.List;

public interface AppointmentService {

    // View all appointments
    List<Appointment> getAllAppointments();

    // Book appointment
    Appointment addAppointment(AppointmentRequest request);

    // Update appointment
    Appointment updateAppointment(Long id, Appointment appointment);

    // Delete appointment
    void deleteAppointment(Long id);

}