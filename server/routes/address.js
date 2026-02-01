console.log('address.js LOADED OK - routes ready');

const express = require('express');
const router = express.Router();
const Address = require('../models/Address');
const auth = require('../middleware/auth');

// POST - Save new address
router.post('/', auth, async (req, res) => {
  console.log('POST /api/addresses - Request received');
  console.log('Body:', req.body);
  console.log('Auth user ID:', req.user?.id);

  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  const { fullName, phone, address, city, pincode, state } = req.body;

  if (!fullName || !phone || !address || !city || !pincode || !state) {
    return res.status(400).json({ message: 'All fields required' });
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
    console.log('Address saved - ID:', saved._id);
    res.status(201).json(saved);
  } catch (err) {
    console.error('SAVE ERROR:', err.message || err);
    res.status(500).json({ message: 'Server error', details: err.message });
  }
});

module.exports = router;