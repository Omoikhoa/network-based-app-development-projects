const rateLimit = require('express-rate-limit');

exports.logInLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute window
    max: 5,
    // message: 'Too many login requests. Try again later.'
    handler: (req, res, next) => {
        let err = new Error('Too many login requests. Try again later');
        err.status = 429;
        return next(err);
    }
})