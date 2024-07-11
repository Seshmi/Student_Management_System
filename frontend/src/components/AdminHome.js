import React from "react";
import AdminNavbar from "./AdminNavBar";

const AdminHome = () => {
    return (
        <div>
            <div style={styles.container}>
                <AdminNavbar />
                <h2>Welcome to the Admin Dashboard</h2>
                <p>Please use the navigation bar to add a student or add marks.</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        textAlign: "center",
    },
};

export default AdminHome;
