package com.healthcare.doctor_service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Doctor {
  private String id;
  private String name;
  private String specialty;
  private String hospital;
  private String avatar;
  private double rating;
  private double price;
}
