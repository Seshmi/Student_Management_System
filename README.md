# Student Management System

## Overview
The Student Management System is a web application that allows students to log in and check their results. An admin user can log in to the system to add marks for each student's subjects (Maths, Science, and English) and manage student accounts. 

## Features
- **Student Login Dashboard**: Students can log in and view their results.
- **Admin Panel**: Admins can add students and enter their marks.
- **Password Management**: On their first login, students must change their password from their registration number to a new password.

## Technologies Used
- **Backend Framework**: Express.js
- **ORM**: Sequelize
- **Database**: MySQL
- **Frontend Framework**: React.js

## Getting Started

### Prerequisites
- Node.js
- MySQL
- Git

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Seshmi/Student_Management_System.git
    cd student-management-system
    ```

2. Install the backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Install the frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

4. Set up the MySQL database:
    ```sql
    CREATE DATABASE student_dashboard;
    ```

### Running the Application

1. Start the backend server:
    ```bash
    cd backend
    npm start
    ```

2. Start the frontend server:
    ```bash
    cd ../frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3001` to view the application.

## Project Structure
```plaintext
student-management-system/
│
├── backend/               # Express.js backend
│   ├── config/            # Database configuration
│   ├── controllers/       # Route handlers
│   ├── migrations/        # Database migrations
│   ├── models/            # Sequelize models
│   ├── routes/            # API routes
│   ├── seeders/           # Database seeders
│   └── app.js             # Express app setup
│
├── frontend/              # React.js frontend
│   ├── public/            # Public assets
│   ├── src/               # React components and pages
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # React pages
│   │   ├── App.js         # Main React component
│   │   ├── index.js       # React entry point
│   └── package.json       # Frontend dependencies
│
└── README.md              # Project documentation
