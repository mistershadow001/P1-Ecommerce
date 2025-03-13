package com.Mayur.Ecom;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class RegisterController {
  @Autowired
  RegisterService service;
  
  @PostMapping({"/add"})
  public String add(@RequestBody RegisterEntity entity) {
    this.service.save(entity);
    return "Saved Successfully";
  }
  
  @GetMapping({"/show"})
  public List<RegisterEntity> getData() {
    return this.service.show();
  }
  
  @PutMapping({"/update/{id}"})
  public String update(@RequestBody RegisterEntity customer, @PathVariable Long id) {
    this.service.update(id, customer);
    return "updated successfully";
  }
  
  @DeleteMapping({"/delete/{id}"})
  public String delete(@PathVariable Long id) {
    this.service.delete(id);
    return "deleted successfully";
  }
}

