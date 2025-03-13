package com.Mayur.Ecom;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/orders"})
@CrossOrigin(origins = {"http://localhost:3000"})
public class OrderController {
  @Autowired
  private OrderService orderService;
  
  @PostMapping({"/place"})
  public String placeOrder(@RequestBody OrderEntity order) {
    return this.orderService.placeOrder(order);
  }
  
  @GetMapping({"/user/{id}"})
  public List<OrderEntity> getOrdersByuserId(@PathVariable Long userId) {
    return this.orderService.getOrdersuserId(userId);
  }
  
  @GetMapping({"/all"})
  public List<OrderEntity> getAllOrders() {
    return this.orderService.getAllOrders();
  }
  
  @PostMapping({"/razorpay/create"})
  public String createRazorpayOrder(@RequestBody OrderEntity order) {
    return this.orderService.createRazorpayOrder(order);
  }
}

