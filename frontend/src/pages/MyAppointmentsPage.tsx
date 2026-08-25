import { MOCK_APPOINTMENTS } from "@/data/mockData";
import type { Appointment } from "@/types";
import { Calendar, Clock, User, XCircle } from "lucide-react";
import { useState } from "react";

export const MyAppointmentsPage = () => {
  // State management
  const [appointments, setAppointments] =
    useState<Appointment[]>(MOCK_APPOINTMENTS);

  const handleCancel = (id: string) => {
    if (confirm("Are you sure you want to cancel this appointment?")) {
      setAppointments((prev) =>
        prev.map((appointment) =>
          appointment.id === id
            ? { ...appointment, status: "CANCELLED" }
            : appointment,
        ),
      );
    }
  };

  const getStatusBadge = (status: Appointment["status"]) => {
    switch (status) {
      case "CONFIRMED":
        return (
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">
            Confirmed
          </span>
        );
      case "COMPLETED":
        return (
          <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            Completed
          </span>
        );
      case "CANCELLED":
        return (
          <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-1 rounded-full">
            Cancelled
          </span>
        );
    }
  };
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        My Scheduled Appointments
      </h1>

      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-bold text-gray-900">
                  {appointment.doctorName}
                </h2>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md">
                  {appointment.specialty}
                </span>
                {getStatusBadge(appointment.status)}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar size={16} className="text-gray-400" />
                  <span>{appointment.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} className="text-gray-400" />
                  <span>{appointment.timeSlot}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} className="text-gray-400" />
                  <span>Patient: {appointment.patientName}</span>
                </div>
              </div>
            </div>
            {appointment.status === "CONFIRMED" && (
              <button
                onClick={() => handleCancel(appointment.id)}
                className="flex items-center justify-center gap-1 text-sm font-medium text-red-600 hover:text-red-700 border border-red-200 hover:bg-red-50 px-4 py-2 rounded-lg transition"
              >
                <XCircle size={16} />
                Cancel Appointment
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
