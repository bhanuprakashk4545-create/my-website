// server/routes/order.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create new order with payment details
router.post('/', async (req, res) => {
  try {
    console.log('Received order:', JSON.stringify(req.body, null, 2)); // debug

    const newOrder = new Order(req.body);

    // IMPORTANT: await the save!
    await newOrder.save();

    console.log('Order saved successfully, ID:', newOrder._id); // debug

    res.status(201).json({
      message: 'Order placed successfully',
      orderId: newOrder._id.toString()
    });
  } catch (err) {
    console.error('Order save failed:', err.message);
    console.error(err.stack); // full stack for debugging

    res.status(500).json({
      message: 'Failed to save order',
      error: err.message // optional – helps frontend show better message
    });
  }
});
// Get my orders with populated user details
router.get('/my', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const orders = await Order.find({ userId })
      .populate('userId', 'name email')  // ← this line adds name & email
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;