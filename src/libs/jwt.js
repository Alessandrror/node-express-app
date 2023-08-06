const { TOKEN_SECRET_KEY } = require('../config.js');
const jwt = require('jsonwebtoken');

// Returning a resolve or reject promise by using a function
// Function that create a jwt and returns the token
const createAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET_KEY,
            {
                expiresIn: "1d"
            },
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            }
        );
    });
};

module.exports = createAccessToken;