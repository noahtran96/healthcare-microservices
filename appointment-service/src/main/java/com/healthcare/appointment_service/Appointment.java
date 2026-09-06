package com.healthcare.appointment_service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Appointment {
  private String id;
  private String doctorId;
  private String doctorName;
  private String specialty;
  private String patientName;
  private String date;
  private String timeSLot;
  private String status;
}
