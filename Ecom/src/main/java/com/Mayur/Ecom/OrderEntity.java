package com.Mayur.Ecom;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "orders_3")
public class OrderEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  
  private Long userId;
  
  private String email;
  
  private String productId;
  
  private Double price;
  
  private String address;
  
  private String paymentId;
  
  public OrderEntity() {}
  
  public OrderEntity(Long userId, String email, String productId, Double price, String address, String paymentId) {
    this.email = email;
    this.productId = productId;
    this.price = price;
    this.address = address;
    this.paymentId = paymentId;
    this.userId = userId;
  }
  
  public Long getId() {
    return this.id;
  }
  
  public void setId(Long id) {
    this.id = id;
  }
  
  public String getEmail() {
    return this.email;
  }
  
  public void setEmail(String email) {
    this.email = email;
  }
  
  public String getProductId() {
    return this.productId;
  }
  
  public void setProductId(String productId) {
    this.productId = productId;
  }
  
  public Double getPrice() {
    return this.price;
  }
  
  public void setPrice(Double price) {
    this.price = price;
  }
  
  public String getAddress() {
    return this.address;
  }
  
  public void setAddress(String address) {
    this.address = address;
  }
  
  public String getPaymentId() {
    return this.paymentId;
  }
  
  public void setPaymentId(String paymentId) {
    this.paymentId = paymentId;
  }
  
  public Long getUserId() {
    return this.userId;
  }
  
  public void setUserId(Long userId) {
    this.userId = userId;
  }
}
