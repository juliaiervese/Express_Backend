// api/middleware/jwt.token.middleware.js
import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided!' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Unauthorized!' });
      }

      // 👉 em vez de req.userId, popular req.user = { id: ... }
      req.user = { id: decoded.id };
      next();
    });
  } catch (error) {
    console.error('Error in verifyToken middleware:', error);
    return res.status(500).json({ message: 'Internal server error!' });
  }
};

export default verifyToken;
