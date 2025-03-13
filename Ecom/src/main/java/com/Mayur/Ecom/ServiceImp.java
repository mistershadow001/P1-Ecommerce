package com.Mayur.Ecom;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceImp implements RegisterService {
  @Autowired
  RegisterRepo repo;
  
  public List<RegisterEntity> show() {
    return this.repo.findAll();
  }
  
  public RegisterEntity save(RegisterEntity customer) {
    return (RegisterEntity)this.repo.save(customer);
  }
  
  public String update(Long id, RegisterEntity customer) {
    RegisterEntity c1 = this.repo.findById(id).get();
    c1.setName(customer.getName());
    c1.setPassword(customer.getPassword());
    c1.setPhone(customer.getPhone());
    c1.setEmail(customer.getEmail());
    c1.setAddress(customer.getAddress());
    this.repo.save(c1);
    return "updated successfully";
  }
  
  public String delete(Long id) {
    this.repo.deleteById(id);
    return null;
  }
}

