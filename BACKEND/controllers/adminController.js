const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Student = require("../models/student");
const Marks = require("../models/marks");
const Admin = require("../models/admin");

exports.addStudent = async (req, res) => {
  try {
    const { registrationNumber, name } = req.body;

    const password = await bcrypt.hash(registrationNumber, 10);
    const student = await Student.create({
      registrationNumber,
      name,
      password,
    });
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addMarks = async (req, res) => {
  try {
    const { studentId, maths, science, english } = req.body;
    console.log(req.body);
    const marks = await Marks.create({ studentId, maths, science, english });
    res.status(201).json(marks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ where: { username } });
  if (!admin) return res.status(401).json({ message: "Invalid credentials1" });

  const isValidPassword = await bcrypt.compare(password, admin.password);
  if (!isValidPassword)
    return res.status(401).json({ message: "Invalid credentials2" });

  const token = jwt.sign(
    { id: admin.id },
    "secret_key"
  );
  res.json({ token });
};