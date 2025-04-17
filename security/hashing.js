const bycrpt = require('bcrypt');


async function hashPassword(password) {
    const saltRounds = 10;
    return bycrpt.hash(password, saltRounds);
}

async function comparePassword(inputPassword, storedHash) {
    return bycrpt.compare(inputPassword, storedHash);
}


module.exports = { hashPassword, comparePassword };