import React, { useState } from "react";
import axios from "axios";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:3000/student/change-password",
        { newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Handle success (e.g., redirect to marks page)
    } catch (error) {
      console.error("Error changing password", error);
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
};

export default ChangePassword;
