import React, { useState } from "react";
import axios from "axios";

const AddMarks = () => {
  const [studentId, setStudentId] = useState("");
  const [maths, setMaths] = useState("");
  const [science, setScience] = useState("");
  const [english, setEnglish] = useState("");

  const handleAddMarks = async () => {
    try {
      await axios.post("http://localhost:3000/admin/add-marks", {
        studentId,
        maths,
        science,
        english,
      });
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error("Error adding marks", error);
    }
  };

  return (
    <div>
      <h2>Add Marks</h2>
      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Maths"
        value={maths}
        onChange={(e) => setMaths(e.target.value)}
      />
      <input
        type="number"
        placeholder="Science"
        value={science}
        onChange={(e) => setScience(e.target.value)}
      />
      <input
        type="number"
        placeholder="English"
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
      />
      <button onClick={handleAddMarks}>Add Marks</button>
    </div>
  );
};

export default AddMarks;
