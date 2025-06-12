const express = require('express');
const controller = require('../controllers/mangaController');
const {isLoggedIn, isSeller} = require('../middlewares/auth');
const { validateId } = require('../middlewares/validator');
const router = express.Router();
const multer  = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,uniqueSuffix + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
	const mimeTypes = ['image/jpeg', 'image/png', 'image/gif']
	if (mimeTypes.includes(file.mimetype))
		return cb(null, true);
	else
		cb(new Error('Invalid file type. Only jpg, jpeg, png, and gif image files are allowed'), false);
}

const upload = multer({storage, fileFilter, limits:{fileSize:2*1024*1024}}).single('image');

router.get('/search', controller.search);

// GET /mangas: send all mangas to the user
router.get('/', controller.index);

// GET /mangas/new: send html for adding a new manga
router.get('/new', isLoggedIn, controller.new);

// POST /mangas: add a new manga
router.post('/', isLoggedIn, upload, controller.create);

// GET /mangas/:id: send details of manga identified by id
router.get('/:id', validateId, controller.show);

// GET /mangas/:id/edit: send html form for editing an existing manga
router.get('/:id/edit', isLoggedIn, validateId, isSeller, controller.edit);

// PUT /mangas/:id: update the manga identified by id
router.put('/:id', isLoggedIn, validateId, isSeller, upload, controller.update);

// DELETE /mangas/:id: delete the manga identified by id
router.delete('/:id', isLoggedIn, validateId, isSeller, controller.delete);

module.exports = router;