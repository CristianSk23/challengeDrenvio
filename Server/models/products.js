const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  specialPrices: {
    type: Number,
  },
  inStock: {
    type: Boolean,
  },
});

module.exports = mongoose.model(
  "challengeCristian_CastaProducts",
  productsSchema
);
