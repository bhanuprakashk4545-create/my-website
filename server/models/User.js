// server/models/User.js - FINAL fixed version
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 6 },
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

// Password hashing - callback style (safe, no async problems)
userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();

  bcrypt.genSalt(12, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next(); // MUST be here
    });
  });
});

// Compare password for login
userSchema.methods.matchPassword = function (enteredPassword, cb) {
  bcrypt.compare(enteredPassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);