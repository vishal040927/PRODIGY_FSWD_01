package hospital_management.backend.service;

import hospital_management.backend.dto.LoginRequest;
import hospital_management.backend.dto.LoginResponse;
import hospital_management.backend.dto.RegisterRequest;

public interface UserService {

    String register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

}