const jwt = require('jsonwebtoken');
const { user: User } = require('../db'); 
const { JWT_SECRET } = require('../env');

async function registerUser(email, hashedPassword, roles) {
    try {
        const user = await User.create({ email, hashedPassword, roles });
        return user;
    } catch (error) {
        throw new Error('Could not register user');
    }
}

async function loginUser(email, hashedPassword) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error('User not found');
    }

    if (hashedPassword !== user.hashedPassword) {
        throw new Error('Invalid Password');
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET); //, role: user.role
    return token;
}

module.exports = {
    registerUser,
    loginUser
};
