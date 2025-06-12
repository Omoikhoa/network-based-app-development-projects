const Manga = require('../models/manga');

// check if user is a guest
exports.isGuest = (req, res, next) => {
    if(!req.session.user) {
        return next();
    } else {
        req.flash('error', 'You are logged in already');  
        req.session.save(()=>res.redirect('/users/profile'));
    }
}

// check if user is authenticated
exports.isLoggedIn = (req, res, next) => {
    if(req.session.user) {
        return next();
    } else {
        req.flash('error', 'You need to log in first');  
        req.session.save(()=>res.redirect('/users/login'));
    }
}

// check if user is the seller of the manga
exports.isSeller = (req, res, next) => {
    const userId = req.session.user;
    const mangaId = req.params.id;

    Manga.findById(mangaId)
        .then(manga => {
            if (!manga) {
                let err = new Error('Manga not found');
                err.status = 404;
                return next(err);
            }
            if (!manga.seller.equals(userId)) {
                let err = new Error('Unauthorized to access this resource');
                err.status = 401;
                return next(err);
            }
            next();
        })
        .catch(err => next(err));
};
