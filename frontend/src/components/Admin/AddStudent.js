import React, { useState } from "react";
import axios from "axios";

const AddStudent = () => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [name, setName] = useState("");

  const handleAddStudent = async () => {
    try {
      await axios.post("http://localhost:3000/admin/add-student", {
        registrationNumber,
        name,
      });
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error("Error adding student", error);
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <input
        type="text"
        placeholder="Registration Number"
        value={registrationNumber}
        onChange={(e) => setRegistrationNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
};

export default AddStudent;
