/* Middleware to log HTTP requests :
  
 - @param {Object} req - The request object.
 - @param {Object} res - The response object.
 - @param {function} next - The next middleware function.
*/
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

module.exports = logger;
