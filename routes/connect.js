const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/Geolocate")
  .then(() => console.log("Connect to mondb database..."))
  .catch((e) => console.error("Error,e"));

const schema = mongoose.Schema({
  data: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const saveData = mongoose.model("formvalue", schema);

module.exports = saveData;
