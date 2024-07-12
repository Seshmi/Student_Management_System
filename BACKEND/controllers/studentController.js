const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Student = require("../models/student");
const Marks = require("../models/marks");

exports.login = async (req, res) => {
  const { registrationNumber, password } = req.body;
  try {
    let student = await Student.findOne({ where: { registrationNumber } });
    console.log('student:', student);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: student.id, isAdmin: false },
      "secret_key"
    );
    const isPasswordChanged = student.isPasswordChanged;
    return res.status(200).json({ isPasswordChanged, token });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
};

exports.changePassword = async (req, res) => {
  const { registrationNumber, newPassword } = req.body;

  if (!newPassword || !registrationNumber) {
    return res.status(400).json({ error: "Invalid request" });
  }

  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await Student.update(
      { password: hashedPassword, isPasswordChanged: true },
      { where: { registrationNumber } }
    );
    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
};


exports.getMarks = async (req, res) => {
  const { id } = req.params;
  try {
    const marks = await Marks.findAll({ where: { studentId: id } });
    res.json(marks);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
};
