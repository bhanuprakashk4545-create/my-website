const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST /api/order
router.post('/', async (req, res) => {
  try {
    // Log EVERYTHING
    console.log('Vercel: Received full order body:', JSON.stringify(req.body, null, 2));

    const newOrder = new Order(req.body);

    console.log('Vercel: Order instance before save:', JSON.stringify(newOrder.toObject(), null, 2));

    const saved = await newOrder.save();

    console.log('Vercel: Order SAVED, ID =', saved._id.toString());

    res.status(201).json({
      message: 'Order placed successfully',
      orderId: saved._id.toString()
    });
  } catch (err) {
    console.error('Vercel: ORDER SAVE FAILED', err.message);
    console.error(err.stack);

    res.status(500).json({
      message: 'Failed to save order',
      error: err.message
    });
  }
});

module.exports = router;