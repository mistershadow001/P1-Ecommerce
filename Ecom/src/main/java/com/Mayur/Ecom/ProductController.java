package com.Mayur.Ecom;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping({"/products"})
public class ProductController {
  @Autowired
  private ProductService productService;
  
  @GetMapping({"/all"})
  public List<ProductEntity> getAllProducts() {
    return this.productService.getAllProducts();
  }
  
  @DeleteMapping({"/{id}"})
  public void deleteProduct(@PathVariable int id) {
    this.productService.deleteProduct(id);
  }
}
