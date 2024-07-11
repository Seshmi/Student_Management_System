import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/student/login', { registrationNumber, password });
      localStorage.setItem('token', response.data.token);
      // Redirect to change password or marks page based on the response
      if (response.data.changePassword) {
        navigate('/student/change-password');
      } else {
        navigate('/student/marks');
      }
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div>
      <h2>Student Login</h2>
      <input type="text" placeholder="Registration Number" value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default StudentLogin;
