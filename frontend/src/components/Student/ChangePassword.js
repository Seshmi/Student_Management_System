import React, { useState } from "react";
import axios from "axios";
import './../../StudentLogin.css';
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const registrationNumber = localStorage.getItem('registrationNumber');

  const handleChangePassword = async () => {
    if (newPassword.trim() === '') {
      setError('Password cannot be empty');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No authentication token found');
        return;
      }

      console.log('Sending request with newPassword:', newPassword);

      const response = await axios.post('http://localhost:3000/student/change-password', { registrationNumber, newPassword }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      console.log('Response:', response);
      setSuccess('Password changed successfully');
      setError('');
      setNewPassword('');
      navigate('/student/marks');
    } catch (error) {
      console.error('Error changing password:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
      setError('Failed to change password. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Change Password</h2>
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleChangePassword}>
        Change Password
      </button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default ChangePassword;
