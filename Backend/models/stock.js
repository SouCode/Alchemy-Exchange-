const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Stock', stockSchema);
