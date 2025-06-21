const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'product_management_secret_key';

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(`Error verifying token: ${error.message}`);
    return res.status(401).json({ message: 'Unauthorized access' });
  }
}

module.exports = authMiddleware;