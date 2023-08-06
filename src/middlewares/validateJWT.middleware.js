const jwt = require('jsonwebtoken');
const { TOKEN_SECRET_KEY } = require('../config.js');

const authRequired = (req, res, next) => {

    // Recovering the token saved by the cookies
    const token = req.cookies;

    // If the token is null return a 401 code and a message
    if (!token.jwt_token) return res.status(401).json({ message: 'Authorization denied!' });

    // Verify the jwt integrity using the secret key
    jwt.verify(token.jwt_token, TOKEN_SECRET_KEY, (err, user) => {

        // When token is invalid return a 403 code status and a message
        if (err) return res.status(403).json({ message: 'Invalid token!' });

        // Save the user returned by the callback to share it with the subsequent callbacks
        req.user = user;

        // If everything is okay then passing to the next function
        next();
    });

};

module.exports = authRequired;