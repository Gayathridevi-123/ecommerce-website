const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: String,
  amount: Number,
  status: String
});

module.exports = mongoose.model("Order", orderSchema);
