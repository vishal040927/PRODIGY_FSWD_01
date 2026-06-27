package hospital_management.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DoctorRequest {

    private String name;

    private String email;

    private String phone;

    private String specialization;

    private String qualification;

    private Integer experience;

    // Login password for doctor
    private String password;

}