const express = require("express");
const app = express();

app.use(express.json());

app.use(express.static("public"));

app.post("/api", (req, res) => {
  const data = req.body;
  console.log(data);
});

//Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`My app is running on port ${port}`);
});
