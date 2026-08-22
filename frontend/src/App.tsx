import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <div className="py-12 text-center text-gray-500 font-medium">
            My Appointments Screen (In Progress)
          </div>
        ),
      },
      {
        path: "/my-appointments",
        element: (
          <div className="py-12 text-center text-gray-500 font-medium">
            My Appointments Screen (In Progress)
          </div>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
