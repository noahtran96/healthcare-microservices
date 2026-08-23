import { useState } from "react";
import type { BookingModalProps } from "../types";
import { Calendar } from "lucide-react";

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
          </h2>
        </div>
      </div>
    </div>
  );
};
