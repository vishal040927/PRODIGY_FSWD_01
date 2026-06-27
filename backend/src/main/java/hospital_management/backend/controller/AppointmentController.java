package hospital_management.backend.controller;

import hospital_management.backend.dto.AppointmentRequest;
import hospital_management.backend.entity.Appointment;
import hospital_management.backend.service.AppointmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:5173")
public class AppointmentController {

    private final AppointmentService service;

    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

    // View all appointments
    @GetMapping
    public List<Appointment> getAllAppointments() {
        return service.getAllAppointments();
    }

    // Book appointment
    @PostMapping
    public Appointment addAppointment(@RequestBody AppointmentRequest request) {
        return service.addAppointment(request);
    }

    // Update appointment
    @PutMapping("/{id}")
    public Appointment updateAppointment(
            @PathVariable Long id,
            @RequestBody Appointment appointment) {

        return service.updateAppointment(id, appointment);
    }

    // Delete appointment
    @DeleteMapping("/{id}")
    public void deleteAppointment(@PathVariable Long id) {
        service.deleteAppointment(id);
    }
}