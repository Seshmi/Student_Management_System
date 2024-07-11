import React, { useState } from "react";
import axios from "axios";
import "./../../App.css";
import AdminNavbar from "../AdminNavBar";

const AddMarks = () => {
  const [studentId, setStudentId] = useState("");
  const [maths, setMaths] = useState("");
  const [science, setScience] = useState("");
  const [english, setEnglish] = useState("");
  const [message, setMessage] = useState(null);

  const handleAddMarks = async (e) => {
    e.preventDefault();

    if (!studentId || !maths || !science || !english) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/admin/add-marks", {
        studentId,
        maths,
        science,
        english,
      });
      setMessage("Marks added successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error adding marks", error);
      setMessage("Failed to add marks.");
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="container">
        <h2>Add Marks</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleAddMarks}>
          <input
            type="text"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="input"
            required
          />
          <input
            type="number"
            placeholder="Maths"
            value={maths}
            onChange={(e) => setMaths(e.target.value)}
            className="input"
            required
          />
          <input
            type="number"
            placeholder="Science"
            value={science}
            onChange={(e) => setScience(e.target.value)}
            className="input"
            required
          />
          <input
            type="number"
            placeholder="English"
            value={english}
            onChange={(e) => setEnglish(e.target.value)}
            className="input"
            required
          />
          <button type="submit" className="button">Add Marks</button>
        </form>
      </div>
    </div>
  );
};

export default AddMarks;
