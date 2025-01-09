/* Error handling middleware :
  
 - @param {Object} err - The error object.
 - @param {Object} req - The request object.
 - @param {Object} res - The response object.
 - @param {function} next - The next middleware function.
*/
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message || 'An unexpected error occurred.' });
};

module.exports = errorHandler;
