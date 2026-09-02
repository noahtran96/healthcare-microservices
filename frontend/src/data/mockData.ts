import type { Appointment, Doctor, TimeSlot } from "@/types";

export const MOCK_DOCTORS: Doctor[] = [];

export const MOCK_SLOTS: TimeSlot[] = [
  { id: "s1", time: "08:00 AM - 08:30 AM", isAvailable: true },
  { id: "s2", time: "08:30 AM - 09:00 AM", isAvailable: false },
  { id: "s3", time: "09:00 AM - 09:30 AM", isAvailable: true },
  { id: "s4", time: "09:30 AM - 10:00 AM", isAvailable: true },
  { id: "s5", time: "02:00 PM - 02:30 PM", isAvailable: true },
  { id: "s6", time: "02:30 PM - 03:00 PM", isAvailable: false },
];

export const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: "app-1",
    doctorId: "doc-1",
    doctorName: "Dr. Alex Mercer, MD",
    specialty: "Cardiology",
    patientName: "John Doe",
    date: "2026-08-25",
    timeSlot: "08:00 AM - 08:30 AM",
    status: "CONFIRMED",
  },
  {
    id: "app-2",
    doctorId: "doc-2",
    doctorName: "Dr. Sarah Jenkins, PhD",
    specialty: "Pediatrics",
    patientName: "John Doe",
    date: "2026-08-10",
    timeSlot: "02:00 PM - 02:30 PM",
    status: "COMPLETED",
  },
];
