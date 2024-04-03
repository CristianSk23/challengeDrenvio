const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
  },
  identification: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  specialPricesBrand: {
    type: String,
  },
});

module.exports = mongoose.model("challengeCristian_CastaUsers", userSchema);
