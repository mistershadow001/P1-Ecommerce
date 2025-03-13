package com.Mayur.Ecom;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
  @Autowired
  private RegisterService registerService;
  
  public boolean authenticateUser(LoginRequest loginRequest) {
    List<RegisterEntity> users = this.registerService.show();
    for (RegisterEntity user : users) {
      if (user.getEmail().equals(loginRequest.getEmail()) && user.getPassword().equals(loginRequest.getPassword()))
        return true; 
    } 
    return false;
  }
}
