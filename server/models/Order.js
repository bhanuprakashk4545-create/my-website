// server/models/Order.js
const mongoose = require('mongoose');

const paymentDetailsSchema = new mongoose.Schema({
  method: {
    type: String,
    required: true,
    enum: ['upi', 'card', 'netbanking', 'wallet', 'cod'],
    trim: true
  },
  // Card-specific fields (only filled if method = 'card')
  cardNumber: {
    type: String,
    trim: true,
    default: null
  },
  cardExpiry: {
    type: String,
    trim: true,
    default: null
  },
  cardCvv: {
    type: String,
    trim: true,
    default: null
  },
  // UPI-specific field
  upiTransactionId: {
    type: String,
    trim: true,
    default: null
  },
  // Net Banking-specific field
  bankName: {
    type: String,
    trim: true,
    default: null
  },
  // Optional: transaction date/time, payment gateway reference, etc.
  transactionDate: {
    type: Date,
    default: Date.now
  }
});

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,          // Optional for guest checkout
    default: null
  },
  items: [{
    productId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    image: {
      type: String,
      default: '/images/placeholder.jpg'
    }
  }],
  total: {
    type: Number,
    required: true,
    min: 0
  },
  address: {
    fullName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    addressLine: { type: String, required: true, trim: true },
    landmark: { type: String, default: '' },
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    pincode: { type: String, required: true, trim: true },
    addressType: { type: String, default: 'home' }
  },
  payment: {
    type: paymentDetailsSchema,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Completed', 'Cancelled', 'Shipped', 'Delivered'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Optional: virtual to show completed status if payment succeeded
orderSchema.virtual('isCompleted').get(function() {
  return this.status === 'Completed';
});

module.exports = mongoose.model('Order', orderSchema);