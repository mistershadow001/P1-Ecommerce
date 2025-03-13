package com.Mayur.Ecom;

import java.util.List;

public interface ProductService {
  List<ProductEntity> getAllProducts();
  
  void deleteProduct(int paramInt);
}
