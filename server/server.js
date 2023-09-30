const express = require("express");
const axios = require("axios");
const _ = require("lodash");
const app = express();
const cors = require("cors");

const blogRouter = require("./routes/blogRoutes");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", blogRouter);

app.get("/", (req, res) => {
  res.send("Subspace Backend Server");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port 🚀: http://localhost:${port}`);
});
