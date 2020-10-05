const express = require("express");
const app = express();
const mongoose = require("mongoose");

const createData = require(__dirname, "./routes/mongodb/connect");

app.use(express.json());

app.use(express.static("public"));

app.post("/api", (req, res) => {
  const data = req.body;

  const nData = new createData(data);
  nData.save(() => {
    if (error) {
      res.status(500).json("There is an error");
      return;
    }
    console.log(data);
    res.json("Data greatly saved ", data);
  });
});

//Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`My app is running on port ${port}`);
});
