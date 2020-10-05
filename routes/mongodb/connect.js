const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/Geolocate")
  .then(() => console.log("Connect to mondb database..."))
  .catch((e) => console.error("Error,e"));

const schema = mongoose.Schema({
  data: {},
  date: {
    type: Date,
    default: Date.now(),
  },
});

const createData = mongoose.model("formdata", schema);

module.exports = createData;
