package com.Mayur.Ecom;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImp implements ProductService {
  @Autowired
  private ProductRepo productRepository;
  
  public List<ProductEntity> getAllProducts() {
    return this.productRepository.findAll();
  }
  
  public void deleteProduct(int id) {
    this.productRepository.deleteById(Integer.valueOf(id));
  }
}
