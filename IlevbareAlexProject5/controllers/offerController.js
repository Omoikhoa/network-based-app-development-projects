const Offer = require('../models/offer');
const Manga = require('../models/manga');

exports.create = (req, res, next) => {
    let mangaId = req.params.id;
    let userId = req.session.user;

    Manga.findById(mangaId)
        .then(manga => {
            if (!manga) {
                let err = new Error('Manga not found');
                err.status = 404;
                return next(err);
            }
            if (manga.seller.equals(userId)) {
                let err = new Error('Unauthorized to access the resource');
                err.status = 401;
                return res.status(401).render('error', { error: err });
            }

            if (!req.body.amount) {
                let err = new Error('Amount is required');
                err.status = 400;
                return next(err);
            }

            let offer = new Offer({
                amount: req.body.amount,
                item: mangaId,
                user: userId
            });

            return offer.save();
        })
        .then(offer => {
            return Manga.findByIdAndUpdate(mangaId, {
                $inc: { totalOffers: 1 },
                $max: { highestOffer: offer.amount }
            });
        })
        .then(() => {
            req.flash('success', 'Offer made successfully');
            res.redirect(`/mangas/${mangaId}`);
        })
        .catch(err => {
            if (!res.headersSent) {
                next(err);
            }
        });
};

exports.index = (req, res, next) => {
    let mangaId = req.params.id;

    Offer.find({ item: mangaId })
        .populate('user', 'firstName lastName')
        .populate('item', 'title active') // Ensure item title and active status are populated
        .then(offers => {
            if (offers.length === 0) {
                let err = new Error('No offers found');
                err.status = 404;
                return next(err);
            }
            res.render('./offer/offers', { offers });
        })
        .catch(err => next(err));
};

exports.accept = (req, res, next) => {
    let mangaId = req.params.id;
    let offerId = req.params.offerId;

    Offer.findById(offerId)
        .then(offer => {
            if (!offer) {
                let err = new Error('Offer not found');
                err.status = 404;
                return next(err);
            }

            // Perform all necessary updates: deactivate item, update offer statuses
            return Promise.all([
                Manga.findByIdAndUpdate(mangaId, { active: false }), // Deactivate item
                Offer.updateMany( // Reject all other offers for this item
                    { item: mangaId, _id: { $ne: offerId } },
                    { status: 'rejected' }
                ),
                Offer.findByIdAndUpdate(offerId, { status: 'accepted' }) // Accept this offer
            ]);
        })
        .then(() => {
            req.flash('success', 'Offer accepted successfully');
            res.redirect(`/mangas/${mangaId}/offers`); // Correctly use template literals
        })
        .catch(err => next(err));
};
