package hospital_management.backend.controller;

import hospital_management.backend.dto.DoctorRequest;
import hospital_management.backend.entity.Doctor;
import hospital_management.backend.service.DoctorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "http://localhost:5173")
public class DoctorController {

    private final DoctorService doctorService;

    public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }

    // ==========================
    // ADD DOCTOR
    // ==========================

    @PostMapping
    public ResponseEntity<Doctor> addDoctor(
            @RequestBody DoctorRequest request
    ) {

        Doctor savedDoctor = doctorService.addDoctor(request);

        return ResponseEntity.ok(savedDoctor);

    }

    // ==========================
    // GET ALL DOCTORS
    // ==========================

    @GetMapping
    public ResponseEntity<List<Doctor>> getAllDoctors() {

        return ResponseEntity.ok(
                doctorService.getAllDoctors()
        );

    }

    // ==========================
    // GET DOCTOR BY ID
    // ==========================

    @GetMapping("/{id}")
    public ResponseEntity<Doctor> getDoctorById(
            @PathVariable Long id
    ) {

        return ResponseEntity.ok(
                doctorService.getDoctorById(id)
        );

    }

    // ==========================
    // UPDATE DOCTOR
    // ==========================

    @PutMapping("/{id}")
    public ResponseEntity<Doctor> updateDoctor(

            @PathVariable Long id,

            @RequestBody Doctor doctor

    ) {

        return ResponseEntity.ok(

                doctorService.updateDoctor(id, doctor)

        );

    }

    // ==========================
    // DELETE DOCTOR
    // ==========================

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDoctor(
            @PathVariable Long id
    ) {

        doctorService.deleteDoctor(id);

        return ResponseEntity.ok(
                "Doctor Deleted Successfully"
        );

    }

}