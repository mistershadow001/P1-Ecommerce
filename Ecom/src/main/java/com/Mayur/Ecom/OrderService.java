package com.Mayur.Ecom;

import java.util.List;

public interface OrderService {
  String placeOrder(OrderEntity paramOrderEntity);
  
  List<OrderEntity> getOrdersuserId(Long paramLong);
  
  List<OrderEntity> getAllOrders();
  
  String createRazorpayOrder(OrderEntity paramOrderEntity);
}

