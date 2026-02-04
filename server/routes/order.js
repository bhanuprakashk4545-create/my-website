// server/routes/order.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create new order with payment details
router.post('/', async (req, res) => {
  try {
    console.log('Vercel received order:', JSON.stringify(req.body, null, 2));

    const newOrder = new Order(req.body);
    await newOrder.save();

    res.status(201).json({ message: 'Order placed', orderId: newOrder._id });
  } catch (err) {
    console.error('Vercel order error:', err.message, err.stack);
    res.status(500).json({ message: 'Server error: ' + err.message });
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