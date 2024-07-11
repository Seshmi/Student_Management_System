import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewMarks = () => {
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:3000/student/marks",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMarks(response.data);
      } catch (error) {
        console.error("Error fetching marks", error);
      }
    };

    fetchMarks();
  }, []);

  return (
    <div>
      <h2>Your Marks</h2>
      <ul>
        {marks.map((mark, index) => (
          <li key={index}>
            Maths: {mark.maths}, Science: {mark.science}, English:{" "}
            {mark.english}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewMarks;
