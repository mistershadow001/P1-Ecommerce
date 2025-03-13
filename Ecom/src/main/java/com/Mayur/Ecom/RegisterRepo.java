package com.Mayur.Ecom;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterRepo extends JpaRepository<RegisterEntity, Long> {
  RegisterEntity findByEmail(String paramString);
}
