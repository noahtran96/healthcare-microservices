package com.healthcare.doctor_service;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/doctors")
public class DoctorController {

  private final List<Doctor> doctors = Arrays.asList(
    new Doctor("doc-1", "Dr. ALex Mercer, MD", "Cardiology", "St.Jude Medical Center", "/doc-1.png", 4.9, 150),
    new Doctor("doc-2", "Dr. Sarah Jenkins, PhD", "Pediatrics", "Mercy General Hospital", "/doc-2.png", 4.8, 120)
  );

  @GetMapping
  public List<Doctor> getAllDoctors() {
    return doctors;
  }
}
