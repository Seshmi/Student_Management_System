const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("student_dashboard", "admin", "admin", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
