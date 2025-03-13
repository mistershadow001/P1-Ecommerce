package com.Mayur.Ecom;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class RazorpayService {
  private static final String RAZORPAY_KEY_ID = "rzp_test_5sMOmi0UPxB3yR";
  
  private static final String RAZORPAY_SECRET_KEY = "akjAe7EuJy9kyUz4iuG0o4a6";
  
  private RazorpayClient razorpayClient;
  
  public RazorpayService() {
    try {
      this.razorpayClient = new RazorpayClient("rzp_test_5sMOmi0UPxB3yR", "akjAe7EuJy9kyUz4iuG0o4a6");
    } catch (Exception e) {
      e.printStackTrace();
    } 
  }
  
  public String createRazorpayOrder(OrderEntity order) {
    try {
      JSONObject orderRequestJson = new JSONObject();
      orderRequestJson.put("amount", order.getPrice().doubleValue() * 100.0D);
      orderRequestJson.put("currency", "INR");
      orderRequestJson.put("receipt", String.valueOf(order.getId()));
      orderRequestJson.put("payment_capture", 1);
      Order razorpayOrder = this.razorpayClient.orders.create(orderRequestJson);
      return razorpayOrder.toString();
    } catch (Exception e) {
      e.printStackTrace();
      return "Error: " + e.getMessage();
    } 
  }
}
