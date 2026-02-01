const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    console.log('[Auth] No token');
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('[Auth] Token valid - payload:', decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.log('[Auth] Token invalid:', err.message);
    return res.status(401).json({ message: 'Invalid token' });
  }
};