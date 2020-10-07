const express = require("express");
const app = express();
const mongoose = require("mongoose");

const saveData = require("./routes/connect");

app.use(express.json());

app.use(express.static("public"));

app.post("/api", (req, res) => {
  const data = req.body;
  console.log(data);

  async function SaveData() {
    const createData = new saveData({
      data: data,
    });
    await createData.save();
  }
  SaveData();
});
//Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`My app is running on port ${port}`);
});
