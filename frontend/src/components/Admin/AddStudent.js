import React, { useState } from "react";
import axios from "axios";
import "./../../App.css";
import AdminNavbar from "../AdminNavBar";

const AddStudent = () => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState(null);

  const handleAddStudent = async (e) => {
    e.preventDefault();

    if (!registrationNumber || !name) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/admin/add-student", {
        registrationNumber,
        name,
      });
      setMessage("Student added successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error adding student", error);
      setMessage("Failed to add student.");
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="container">
        <h2>Add Student</h2>
        {message && <p className="message error">{message}</p>}
        <form onSubmit={handleAddStudent}>
          <input
            type="text"
            placeholder="Registration Number"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            className="input"
            required
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            required
          />
          <button type="submit" className="button">Add Student</button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
