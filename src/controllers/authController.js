/* Module Dependencies */
const authService = require('../services/authService');

/* Register Controller :
  
 - @param {Object} req - The request object.
 - @param {Object} res - The response object.
 - @returns {Promise<void>} - A promise that resolves to void.
*/
const register = async (req, res) => {
    const { username, email } = req.body;

    if (!username || !email) {
        return res.status(400).json({ error: 'Username and email are required.' });
    }

    try {
        const result = await authService.registerUser(username, email);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/* Login Controller :
  
 - @param {Object} req - The request object.
 - @param {Object} res - The response object.
 - @returns {Promise<void>} - A promise that resolves to void.
*/
const login = async (req, res) => {
    const { username, email } = req.body;

    if (!username || !email) {
        return res.status(400).json({ error: 'Username and email are required.' });
    }

    try {
        const result = await authService.loginUser(username, email);
        res.status(200).json(result);
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
};

module.exports = { register, login };
