const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  image: String,           // e.g. "/images/product1.jpg"
  stock: { type: Number, default: 10 }
});

module.exports = mongoose.model('Product', productSchema);