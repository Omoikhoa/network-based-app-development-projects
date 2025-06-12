const { body } = require('express-validator');
const { validationResult } = require('express-validator');

exports.validateId = (req, res, next) => {
    let id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid story id');
        err.status = 400;
        return next(err);
    } else {
        return next();
    }
};

exports.validateSignUp = [
    body('firstName', 'First name cannot be empty').notEmpty().trim().escape(),
    body('lastName', 'Last name cannot be empty').notEmpty().trim().escape(),
    body('email', 'Email must be valid email address').notEmpty().isEmail().trim().escape().normalizeEmail(),
    body('password', 'Password must be at least 8 characters and at most 64 characters').notEmpty().isLength({ min: 8, max: 64 }),
];

exports.validateLogIn = [
    body('email', 'Email must be valid email address').notEmpty().isEmail().trim().escape().normalizeEmail(),
    body('password', 'Password must be at least 8 characters and at most 64 characters').notEmpty().isLength({ min: 8, max: 64 })
];

exports.validateManga = [
    body('title', 'Title cannot be empty').notEmpty().trim().escape(),
    body('condition', 'Condition must be one of the specified values').isIn(['New', 'Like New', 'Good', 'Fair', 'Poor']),
    body('price', 'Price must be a valid currency amount').isCurrency({ allow_negatives: false }),
    body('details', 'Details cannot be empty').notEmpty().trim().escape(),
];

exports.validateOffer = [
    body('amount', 'Amount must be a valid currency amount').notEmpty().trim().escape().isCurrency({ allow_negatives: false })
];

exports.validateResult = (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        errors.array().forEach(error => {
            req.flash('error', error.msg);
        });
        return res.redirect(req.get('Referrer') || '/');
    } else {
        return next();
    }
};