const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET; // Set your secret key here

// Middleware to authenticate JWT
module.exports = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        
        req.user = decoded; // Attach the decoded user to request
        next(); // Proceed to the next middleware
    });
};