const express = require('express');
const controller = require('../controllers/offerController');
const { isLoggedIn, isSeller } = require('../middlewares/auth');
const { validateId, validateOffer, validateResult } = require('../middlewares/validator');

const router = express.Router({ mergeParams: true });

// POST /mangas/:id/offers: make an offer
router.post('/', isLoggedIn, validateOffer, validateResult, controller.create);

// GET /mangas/:id/offers: view all offers for a manga
router.get('/', isLoggedIn, isSeller, controller.index);

// PUT /mangas/:id/offers/:offerId: accept an offer
router.put('/:offerId', isLoggedIn, isSeller, validateId, controller.accept);

module.exports = router;