package hospital_management.backend.service;

import hospital_management.backend.dto.LoginRequest;
import hospital_management.backend.dto.LoginResponse;

public interface AuthService {

    LoginResponse login(LoginRequest request);

}