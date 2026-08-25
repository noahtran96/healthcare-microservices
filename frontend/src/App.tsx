import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { DoctorListPage } from "@/pages/DoctorListPage";
import { MyAppointmentsPage } from "./pages/MyAppointmentsPage";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<DoctorListPage />} />
          <Route path="my-appointments" element={<MyAppointmentsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
