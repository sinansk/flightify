import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyBookingsPage from "./pages/MyBookingsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import WithoutNavbar from "./routes/WithoutNavbar";
import WithNavbar from "./routes/WithNavbar";
import AuthRoutes from "./routes/AuthRoutes";
import Modal from "./components/Modals/Modal";
import { Toaster } from "./components/ui/toaster";
function App() {
  return (
    <div className="min-w-screen min-h-screen overflow-y-hidden bg-gradient-to-b from-purple-400 via-violet-500 to-indigo-600">
      <Modal />
      <Toaster />
      <Router>
        <Routes>
          <Route element={<WithNavbar />}>
            <Route path="/" element={<HomePage />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/my-bookings" element={<MyBookingsPage />} />
            </Route>
          </Route>
          <Route element={<WithoutNavbar />}>
            <Route element={<AuthRoutes />}>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
