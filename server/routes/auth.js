// server/routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Secret key (better to move to .env)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key_change_this_very_strong_random_string';

// Register route (already working - kept as is)
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
    console.error('REGISTRATION ERROR DETAILS:', err.stack || err);
    res.status(500).json({ message: 'Server error during registration: ' + (err.message || 'Unknown error') });
  }
});

// Login route - FIXED to include isAdmin in token
router.post('/login', async (req, res) => {
  console.log('POST /api/auth/login received → Body:', req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // FIXED: Include isAdmin in the token payload
    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin   // ← This line was missing or commented out
      },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );

    console.log('Login successful for:', email);
    console.log('Token payload includes isAdmin:', user.isAdmin);

    res.json({
      message: 'Login successful',
      token,
      user: { name: user.name, email: user.email, isAdmin: user.isAdmin }
    });
  } catch (err) {
    console.error('LOGIN ERROR DETAILS:', err.stack || err);
    res.status(500).json({ message: 'Server error during login: ' + (err.message || 'Unknown') });
  }
});

module.exports = router;