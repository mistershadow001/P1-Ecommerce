package com.Mayur.Ecom;

import java.util.List;

public interface RegisterService {
  List<RegisterEntity> show();
  
  RegisterEntity save(RegisterEntity paramRegisterEntity);
  
  String update(Long paramLong, RegisterEntity paramRegisterEntity);
  
  String delete(Long paramLong);
}