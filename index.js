require("dotenv").config();
const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");

const app = express();
app.use(formidable());

app.use(cors());

app.post("/contact", (req, res) => {
  console.log("route : /contact");
  try {
    console.log(req.fields);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log("serveur started");
});
