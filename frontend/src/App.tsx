import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { DoctorListPage } from "@/pages/DoctorListPage";

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
          <Route
            path="my-appointments"
            element={
              <div className="py-12 text-center text-gray-500 font-medium">
                My Appointments Screen (In Progress)
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
