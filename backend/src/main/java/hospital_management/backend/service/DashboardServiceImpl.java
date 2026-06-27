package hospital_management.backend.service;

import hospital_management.backend.dto.DashboardResponse;
import hospital_management.backend.repository.AppointmentRepository;
import hospital_management.backend.repository.DoctorRepository;
import hospital_management.backend.repository.PatientRepository;
import org.springframework.stereotype.Service;

@Service
public class DashboardServiceImpl implements DashboardService {

    private final DoctorRepository doctorRepository;
    private final PatientRepository patientRepository;
    private final AppointmentRepository appointmentRepository;

    public DashboardServiceImpl(
            DoctorRepository doctorRepository,
            PatientRepository patientRepository,
            AppointmentRepository appointmentRepository
    ) {

        this.doctorRepository = doctorRepository;
        this.patientRepository = patientRepository;
        this.appointmentRepository = appointmentRepository;

    }

    @Override
    public DashboardResponse getDashboardData() {

        long doctors = doctorRepository.count();
        long patients = patientRepository.count();
        long appointments = appointmentRepository.count();

        return new DashboardResponse(
                doctors,
                patients,
                appointments
        );
    }

}