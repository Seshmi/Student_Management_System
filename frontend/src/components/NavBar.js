import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={{ ...styles.navItem, marginLeft: "auto" }}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#333",
    padding: "10px",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
    margin: 0,
  },
  navItem: {
    margin: "0 10px",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
};

export default NavBar;
