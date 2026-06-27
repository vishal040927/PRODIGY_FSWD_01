package hospital_management.backend.controller;

import hospital_management.backend.entity.Patient;
import hospital_management.backend.service.PatientService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins = "http://localhost:5173")
public class PatientController {

    private final PatientService patientService;

    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @PostMapping
    public ResponseEntity<Patient> addPatient(@RequestBody Patient patient) {

        return ResponseEntity.ok(
                patientService.addPatient(patient)
        );

    }

    @GetMapping
    public ResponseEntity<List<Patient>> getAllPatients() {

        return ResponseEntity.ok(
                patientService.getAllPatients()
        );

    }

    @GetMapping("/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable Long id) {

        return ResponseEntity.ok(
                patientService.getPatientById(id)
        );

    }

    @PutMapping("/{id}")
    public ResponseEntity<Patient> updatePatient(
            @PathVariable Long id,
            @RequestBody Patient patient
    ) {

        return ResponseEntity.ok(
                patientService.updatePatient(id, patient)
        );

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePatient(@PathVariable Long id) {

        patientService.deletePatient(id);

        return ResponseEntity.ok("Patient Deleted Successfully");

    }

}