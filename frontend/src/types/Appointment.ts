export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  specialty: string;
  patientName: string;
  date: string;
  timeSlot: string;
  status: "CONFIRMED" | "COMPLETED" | "CANCELLED";
}
