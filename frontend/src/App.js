import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import AddStudent from "./components/Admin/AddStudent";
import AddMarks from "./components/Admin/AddMarks";
import StudentLogin from "./components/Student/StudentLogin";
import ChangePassword from "./components/Student/ChangePassword";
import ViewMarks from "./components/Student/ViewMarks";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/add-student" element={<AddStudent />} />
        <Route path="/admin/add-marks" element={<AddMarks />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/change-password" element={<ChangePassword />} />
        <Route path="/student/marks" element={<ViewMarks />} />
      </Routes>
    </Router>
  );
}

export default App;
