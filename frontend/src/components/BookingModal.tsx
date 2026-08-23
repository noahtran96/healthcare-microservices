import { useState } from "react";
import type { BookingModalProps } from "@/types";
import { Calendar, X } from "lucide-react";
import { MOCK_SLOTS } from "@/data/mockData";

export const BookingModal = ({
  isOpen,
  onClose,
  doctor,
}: BookingModalProps) => {
  // State of the currently selected slot
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);

  // Hide modal when the modal is not open or no doctor is selected
  if (!isOpen || !doctor) return null;

  const handleConfirm = () => {
    if (!selectedSlotId) return;
    alert(
      `Booking confirmed! Doctor: ${doctor.name}, Slot ID: ${selectedSlotId}`,
    );
    onClose();
    setSelectedSlotId(null); // Reset slot
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* Modal box */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
        {/* Modal header */}
        <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Calendar size={20} />
            Book Appointment
          </h2>
          <button
            onClick={onClose}
            className="hover:bg-blue-700 p-1 rounded-full transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {/* Doctor information */}
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="w-12 h-12 rounded-full bg-blue-50"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
              <p className="text-sm text-gray-500">{doctor.specialty}</p>
            </div>
          </div>

          {/* Time slot list */}
          <h4 className="font-medium text-gray-700 mb-3">Select a Time Slot</h4>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {MOCK_SLOTS.map((slot) => (
              <button
                key={slot.id}
                disabled={!slot.isAvailable}
                onClick={() => setSelectedSlotId(slot.id)}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition border ${!slot.isAvailable ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed" : ""} ${slot.isAvailable && selectedSlotId !== slot.id ? "bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600" : ""} ${selectedSlotId === slot.id ? "bg-blue-50 border-blue-600 text-blue-700 ring-1 ring-blue-600" : ""}`}
              >
                {slot.time}
              </button>
            ))}
          </div>

          {/* Confirmation button */}
          <button
            onClick={handleConfirm}
            disabled={!selectedSlotId}
            className={`w-full py-3 rounded-xl font-semibold transition ${selectedSlotId ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
          >
            Confirm Booking (${doctor.price})
          </button>
        </div>
      </div>
    </div>
  );
};
