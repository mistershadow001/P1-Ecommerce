package com.Mayur.Ecom;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Version;

@Entity
@Table(name = "products")
public class ProductEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  
  private String name;
  
  private String description;
  
  private String imageUrl;
  
  private String category;
  
  private double originalPrice;
  
  private double discountedPrice;
  
  @Version
  private Integer version;
  
  public ProductEntity() {}
  
  public ProductEntity(String name, String description, String imageUrl, String category, double originalPrice, double discountedPrice) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.category = category;
    this.originalPrice = originalPrice;
    this.discountedPrice = discountedPrice;
  }
  
  public int getId() {
    return this.id;
  }
  
  public void setId(int id) {
    this.id = id;
  }
  
  public String getName() {
    return this.name;
  }
  
  public void setName(String name) {
    this.name = name;
  }
  
  public String getDescription() {
    return this.description;
  }
  
  public void setDescription(String description) {
    this.description = description;
  }
  
  public String getImageUrl() {
    return this.imageUrl;
  }
  
  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }
  
  public String getCategory() {
    return this.category;
  }
  
  public void setCategory(String category) {
    this.category = category;
  }
  
  public double getOriginalPrice() {
    return this.originalPrice;
  }
  
  public void setOriginalPrice(double originalPrice) {
    this.originalPrice = originalPrice;
  }
  
  public double getDiscountedPrice() {
    return this.discountedPrice;
  }
  
  public void setDiscountedPrice(double discountedPrice) {
    this.discountedPrice = discountedPrice;
  }
}

