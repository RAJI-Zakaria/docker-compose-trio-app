const {user:User} = require('../db')


async function getUsers() {
    try {
        console.log("get user being called")
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw new Error('Could not fetch users');
    }
}

async function getUserById(userId) {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error('Could not fetch user');
    }
}

async function createUser(username, password, role) {
    try {
        const user = await User.create({ username, password, role });
        return user;
    } catch (error) {
        throw new Error('Could not create user');
    }
}

async function updateUser(userId, userData) {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }
        await user.update(userData);
        return user;
    } catch (error) {
        throw new Error('Could not update user');
    }
}

async function deleteUser(userId) {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }
        await user.destroy();
    } catch (error) {
        throw new Error('Could not delete user');
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};