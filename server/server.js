// server/server.js - Full Vercel-compatible version

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://my-shop-one-rho.vercel.app'], // ← add your real Vercel domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public folder (frontend HTML, JS, CSS, images)
app.use(express.static(path.join(__dirname, '../public')));

// API Routes – MUST come BEFORE catch-all route
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/address', require('./routes/address'));
app.use('/api/order', require('./routes/order'));

// MongoDB connection (reconnects on each request for serverless)
let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log('MongoDB already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4
    });

    isConnected = true;
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    isConnected = false;
    // Retry after 5 seconds
    setTimeout(connectDB, 5000);
  }
};

// Run connection before every request (Vercel serverless best practice)
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Catch-all route: Serve frontend for all other paths (SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Export for Vercel (no app.listen() needed)
module.exports = app;