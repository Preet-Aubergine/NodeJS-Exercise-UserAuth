const User = require('../models/User');

// register
const registerUser = async (username, email) => {
    const newUser = new User({ username, email });
    try {
        await newUser.save();
        return { message: 'User registered successfully.' };
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map((e) => e.message);
            throw new Error(messages.join(' '));
        }
        if (err.code === 11000) {
            // console.log(err);
            const field = Object.keys(err.keyValue)[0];
            const errorMessage = field === 'username'
                ? 'Username'
                : 'Email';
            throw new Error(`${errorMessage} already exists.`);
        }
        throw new Error(err.message);
    }
};

// login
const loginUser = async (username, email) => {
    try {
        const userByUsername = await User.findOne({ username });
        if (!userByUsername) {
            throw new Error('Invalid username.');
        }
        if (userByUsername.email !== email) {
            throw new Error('Invalid email for the given username.');
        }
        return { message: 'Login successful.' };
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = { registerUser, loginUser };
