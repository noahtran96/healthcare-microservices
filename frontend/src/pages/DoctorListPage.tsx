import { useState } from "react";
import { MOCK_DOCTORS } from "@/data/mockData";
import type { Doctor } from "@/types";
import { BookingModal } from "@/components/BookingModal";

export const DoctorListPage = () => {
  // State management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  // Event handlers
  const handleOpenModal = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Book an Appointment with a Specialist
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_DOCTORS.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={doctor.avatar}
                alt={doctor.name}
                className="w-16 h-16 rounded-full bg-blue-50"
              />
              <div>
                <h2 className="font-semibold text-lg text-gray-900">
                  {doctor.name}
                </h2>
                <p className="text-sm text-blue-600 font-medium">
                  {doctor.specialty}
                </p>
                <p className="text-xs text-gray-500 mt-1">{doctor.hospital}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
              <div>
                <span className="text-xs text-gray-400">Consultation Fee</span>
                <p className="font-bold text-gray-800">${doctor.price}</p>
              </div>
              <button
                onClick={() => handleOpenModal(doctor)}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        doctor={selectedDoctor}
      />
    </div>
  );
};
