const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Student = require("./student");

const Marks = sequelize.define("Marks", {
  studentId: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  maths: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  science: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  english: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Marks;
