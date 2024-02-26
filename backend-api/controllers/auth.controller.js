const { registerUser, loginUser } = require('../services/auth.service');

async function register(req, res) {
    const { email, hashedPassword, roles } = req.body;
    try {
        const user = await registerUser(email, hashedPassword);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function login(req, res) {
    const { email, hashedPassword } = req.body;
    try {
        const token = await loginUser(email, hashedPassword);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

module.exports = {
    register,
    login
};