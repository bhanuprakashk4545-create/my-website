const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Simple Address Schema
const addressSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  addressLine: String,
  landmark: String,
  city: String,
  state: String,
  pincode: String,
  addressType: String,
  createdAt: { type: Date, default: Date.now }
});

const Address = mongoose.model('Address', addressSchema);

// Save new address
router.post('/', async (req, res) => {
  try {
    const newAddress = new Address(req.body);
    await newAddress.save();
    res.status(201).json({ message: 'Address saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to save address' });
  }
});

module.exports = router;