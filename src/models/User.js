/* Module Dependencies */
const mongoose = require('mongoose');

/* User schema definition :
  
 - @typedef {Object} User
 - @property {string} username - The username of the user. Must be unique and contain only alphanumeric characters.
 - @property {string} email - The email of the user. Must be in a valid email format.
*/
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

/* User model :
 
 - @type {mongoose.Model<User>}
*/
const User = mongoose.model('User', userSchema);

module.exports = User;
