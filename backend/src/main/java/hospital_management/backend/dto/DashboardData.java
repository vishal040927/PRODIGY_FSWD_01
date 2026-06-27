package hospital_management.backend.dto;

import hospital_management.backend.entity.Appointment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class DashboardData {

    private long totalPatients;
    private long totalDoctors;
    private long totalAppointments;
    private long totalUsers;
    private List<Appointment> recentAppointments;
}