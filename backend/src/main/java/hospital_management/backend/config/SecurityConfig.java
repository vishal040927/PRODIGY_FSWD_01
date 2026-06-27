package hospital_management.backend.config;

import hospital_management.backend.jwt.JwtAuthenticationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http

                .csrf(csrf -> csrf.disable())

                .cors(Customizer.withDefaults())

                .sessionManagement(session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )

                .authorizeHttpRequests(auth -> auth

                        // Public APIs
                        .requestMatchers("/api/auth/**").permitAll()

                        // ===========================
                        // DOCTOR APIs
                        // ===========================

                        // Everyone logged in can VIEW doctors
                        .requestMatchers(HttpMethod.GET, "/api/doctors/**")
                        .hasAnyRole("USER", "DOCTOR", "ADMIN")

                        // Only ADMIN can ADD doctors
                        .requestMatchers(HttpMethod.POST, "/api/doctors/**")
                        .hasRole("ADMIN")

                        // Only ADMIN can UPDATE doctors
                        .requestMatchers(HttpMethod.PUT, "/api/doctors/**")
                        .hasRole("ADMIN")

                        // Only ADMIN can DELETE doctors
                        .requestMatchers(HttpMethod.DELETE, "/api/doctors/**")
                        .hasRole("ADMIN")

                        // ===========================
                        // PATIENT APIs
                        // ===========================

                        .requestMatchers("/api/patients/**")
                        .hasRole("ADMIN")

                        // ===========================
                        // APPOINTMENT APIs
                        // ===========================

                        .requestMatchers("/api/appointments/**")
                        .hasAnyRole("USER", "DOCTOR", "ADMIN")

                        // ===========================
                        // ADMIN APIs
                        // ===========================

                        .requestMatchers("/api/admin/**")
                        .hasRole("ADMIN")

                        // Everything else
                        .anyRequest().authenticated()

                )

                .addFilterBefore(
                        jwtAuthenticationFilter,
                        UsernamePasswordAuthenticationFilter.class
                );

        return http.build();

    }

    @Bean
    public PasswordEncoder passwordEncoder() {

        return new BCryptPasswordEncoder();

    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration configuration
    ) throws Exception {

        return configuration.getAuthenticationManager();

    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOrigins(
                List.of("http://localhost:5173")
        );

        configuration.setAllowedMethods(
                List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")
        );

        configuration.setAllowedHeaders(
                List.of("*")
        );

        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration("/**", configuration);

        return source;

    }

}