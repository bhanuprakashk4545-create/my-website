const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Address Schema (unchanged)
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

// Save new address (POST)
router.post('/', async (req, res) => {
  try {
    const newAddress = new Address(req.body);
    await newAddress.save();
    res.status(201).json({ message: 'Address saved successfully', id: newAddress._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to save address' });
  }
});

// Update existing address (PUT - new route)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAddress = await Address.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!updatedAddress) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.json({ message: 'Address updated successfully', address: updatedAddress });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update address' });
  }
});

module.exports = router;