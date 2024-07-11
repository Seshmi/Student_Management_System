const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const adminRoutes = require("./routes/adminRoutes");
const studentRoutes = require("./routes/studentRoutes");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.use("/admin", adminRoutes);
app.use("/student", studentRoutes);

app.use(express.json());

sequelize
  .sync()
  .then((result) => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.log(err));
