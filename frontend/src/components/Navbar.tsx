import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand logo */}
          <Link to="/" className="text-xl font-bold text-blue-600">
            HealthCare
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              Find Doctors
            </Link>
            <Link
              to="/my-appointments"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              My Appointments
            </Link>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
              Role: PATIENT
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
