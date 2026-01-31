const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /api/auth/register
router.post('/register', async (req, res) => {
  console.log('POST /api/auth/register received → Body:', req.body);

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      console.log('User already exists:', email);
      return res.status(400).json({ message: 'User already exists' });
    }

    console.log('Creating new user...');
    user = new User({ name, email, password });

    await user.save();
    console.log('User saved successfully:', user.email);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('REGISTRATION ERROR DETAILS:', err.stack || err.message);
    res.status(500).json({ message: 'Server error during registration: ' + (err.message || 'Unknown error') });
  }
});

module.exports = router;