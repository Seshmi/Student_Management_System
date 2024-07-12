import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './../../StudentLogin.css';

const StudentLogin = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/student/login', { registrationNumber, password });
      console.log(response.data);
      if (response.data.isPasswordChanged === false) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('registrationNumber', registrationNumber);
        navigate('/student/change-password');
      } else {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('registrationNumber', registrationNumber);
        navigate('/student/marks');
      }
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div className="container">
      <h2>Student Login</h2>
      <input type="text" placeholder="Registration Number" value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default StudentLogin;
