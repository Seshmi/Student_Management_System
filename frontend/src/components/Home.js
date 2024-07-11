import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      <nav>
        <ul style={styles.navList}>
          <li style={{ ...styles.navItem, marginLeft: "auto" }}>
            <Link to="/admin/login" style={styles.link}>Admin Login</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/student/login" style={styles.link}>Student Login</Link>
          </li>
        </ul>
      </nav>
      <h2 style={styles.heading}>Welcome to the Student Dashboard</h2>
      <p style={styles.paragraph}>Please use the navigation bar to log in as a student or admin.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f4f4f4",
    padding: "10px",
  },
  navItem: {
    margin: "0 10px",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  heading: {
    marginTop: "20px",
  },
  paragraph: {
    marginBottom: "20px",
  },
};

export default Home;
