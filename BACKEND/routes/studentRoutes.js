const express = require("express");
const {
  changePassword,
  getMarks,
} = require("../controllers/studentController");
const {
  login,
} = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/change-password", authMiddleware, changePassword);
router.get("/marks", authMiddleware, getMarks);
router.post("/login", login);

module.exports = router;
