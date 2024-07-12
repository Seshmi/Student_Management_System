const express = require("express");
const {
  login,
  changePassword,
  getMarks,
} = require("../controllers/studentController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/login", login);
router.post("/change-password", authMiddleware, changePassword);
router.get("/marks/:id", authMiddleware, getMarks);

module.exports = router;
