const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST /api/order
router.post('/', async (req, res) => {
  try {
    // Log EVERYTHING received from frontend
    console.log('=== NEW ORDER REQUEST RECEIVED ===');
    console.log('Full body:', JSON.stringify(req.body, null, 2));

    // Create new order instance
    const newOrder = new Order(req.body);

    // Log the instance before saving
    console.log('New Order instance created:', JSON.stringify(newOrder.toObject(), null, 2));

    // Force await save – this is the critical line
    const savedOrder = await newOrder.save();

    // Log success
    console.log('ORDER SAVED SUCCESSFULLY');
    console.log('Saved Order ID:', savedOrder._id.toString());

    res.status(201).json({
      message: 'Order placed successfully',
      orderId: savedOrder._id.toString()
    });
  } catch (err) {
    // Log FULL error details
    console.error('=== ORDER SAVE FAILED ===');
    console.error('Error message:', err.message);
    console.error('Full error stack:', err.stack);
    console.error('Validation errors (if any):', err.errors);

    res.status(500).json({
      message: 'Failed to save order',
      error: err.message,
      details: err.errors ? Object.keys(err.errors) : 'No details'
    });
  }
});

module.exports = router;