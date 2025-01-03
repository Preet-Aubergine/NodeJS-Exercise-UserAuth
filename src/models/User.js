const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (v) => /^[a-zA-Z0-9]+$/.test(v),
            message: 'Username must not contain spaces or special characters.',
        },
    },
    email: {
        type: String,
        required: true,
        unique: false,
        validate: {
            validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
            message: 'Invalid email format.',
        },
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
