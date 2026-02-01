// server/routes/address.js

const express = require('express');
const router = express.Router();  // ← This line creates the router object

const Address = require('../models/Address');
const auth = require('../middleware/auth');

// POST - Save new address (protected)
router.post('/', auth, async (req, res) => {
  console.log('POST /api/addresses received → Body:', req.body);
  console.log('User from token:', req.user);

  const { fullName, phone, address, city, pincode, state } = req.body;

  if (!fullName || !phone || !address || !city || !pincode || !state) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newAddress = new Address({
      userId: req.user.id,
      fullName,
      phone,
      address,
      city,
      pincode,
      state
    });

    const saved = await newAddress.save();
    console.log('Address saved successfully → ID:', saved._id);

    res.status(201).json(saved);
  } catch (err) {
    console.error('SAVE ADDRESS ERROR:', err.stack || err);
    res.status(500).json({ 
      message: 'Failed to save address', 
      error: err.message || 'Unknown error'
    });
  }
});

// GET - Get all saved addresses for the logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const addresses = await Address.find({ userId: req.user.id }).sort({ createdAt: -1 });
    console.log('Returning', addresses.length, 'addresses for user', req.user.id);
    res.json(addresses);
  } catch (err) {
    console.error('GET ADDRESSES ERROR:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;