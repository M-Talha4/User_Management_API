const jwt = require('jsonwebtoken');
require('dotenv').config();

const { tokenExpiration } = require('../config');

const jwtSecret = process.env.JWT_SECRET;

function generateJWT(email) {
    const token = jwt.sign({ email: email }, jwtSecret, { expiresIn: tokenExpiration });
    return token;
}
function decodeToken(token) {

    try {
        const decoded = jwt.verify(token, jwtSecret);
        return decoded;

    } catch (err) {
        console.log(`Decoding token ${err}`);
        return;
    }
}


module.exports = { generateJWT, decodeToken };