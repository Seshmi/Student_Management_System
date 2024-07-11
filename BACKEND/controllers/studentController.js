const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Student = require("../models/student");
const Marks = require("../models/marks");

exports.login = async (req, res) => {
  const { registrationNumber, password } = req.body;
  try {
    let student = await Student.findOne({ where: { registrationNumber } });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    if (!student.isPasswordChanged) {
      const isMatch = await bcrypt.compare(registrationNumber, student.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      return res.status(200).json({ changePassword: true });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: student.id, isAdmin: false },
      "secret_key"
    );
    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
};

exports.changePassword = async (req, res) => {
  const { newPassword } = req.body;
  const { id } = req.user;
  if (!newPassword || !id) {
    return res.status(400).json({ error: "Invalid request" });
  }

  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await Student.update(
      { password: hashedPassword, isPasswordChanged: true },
      { where: { id } }
    );
    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
};


exports.getMarks = async (req, res) => {
  const { id } = req.user;
  try {
    const marks = await Marks.findAll({ where: { StudentId: id } });
    res.json(marks);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
};
