package com.Mayur.Ecom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/auth"})
@CrossOrigin(origins = {"http://localhost:3000"})
public class AuthController {
  @Autowired
  private AuthService authService;
  
  @PostMapping({"/signin"})
  public ResponseEntity<String> signIn(@RequestBody LoginRequest loginRequest) {
    boolean isAuthenticated = this.authService.authenticateUser(loginRequest);
    if (isAuthenticated)
      return ResponseEntity.ok("Sign in successful!"); 
    return ResponseEntity.status(401).body("Invalid email or password.");
  }
}

