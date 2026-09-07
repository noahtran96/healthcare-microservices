package com.healthcare.appointment_service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/appointments")
@CrossOrigin(origins = "*")
public class AppointmentController {
  private final List<Appointment> appointments = new ArrayList<>();

  public AppointmentController() {
    appointments.add(new Appointment(
      "app-1", "doc-1", "Dr. Alex Mercer, MD", "Cardiology", "John Doe", "2026-08-25", "08:00 AM - 08:30 AM", "CONFIRMED"
    ));
  }

  @GetMapping
  public List<Appointment> getAll() {
    return appointments;
  }

  @PostMapping
  public Appointment create(@RequestBody Appointment req) {
    req.setId("app-" + System.currentTimeMillis());
    req.setStatus("CONFIRMED");
    appointments.add(req);
    return req;
  }

  @PatchMapping("/{id}/cancel")
  public Appointment cancel(@PathVariable String id) {
    for (Appointment appointment : appointments) {
      if (appointment.getId().equals(id)) {
        appointment.setStatus("CANCELLED");
        return appointment;
      }
    }

    return null;
  }
}