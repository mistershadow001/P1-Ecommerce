package com.Mayur.Ecom;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImp implements OrderService {
  @Autowired
  private OrderRepo repo;
  
  @Autowired
  private RazorpayService razorpayService;
  
  public String placeOrder(OrderEntity order) {
    this.repo.save(order);
    return "Order placed successfully with ID: " + String.valueOf(order.getId());
  }
  
  public List<OrderEntity> getAllOrders() {
    return this.repo.findAll();
  }
  
  public String createRazorpayOrder(OrderEntity order) {
    return this.razorpayService.createRazorpayOrder(order);
  }
  
  public List<OrderEntity> getOrdersuserId(Long userId) {
    return this.repo.findByUserId(userId);
  }
}
