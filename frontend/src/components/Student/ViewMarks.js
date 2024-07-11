import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../../ViewMarks.css";

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
    <div className="view-marks">
      <h2>Your Marks</h2>
      <table className="marks-table">
        <thead>
          <tr>
            <th>Maths</th>
            <th>Science</th>
            <th>English</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((mark, index) => (
            <tr key={index}>
              <td>{mark.maths}</td>
              <td>{mark.science}</td>
              <td>{mark.english}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewMarks;
