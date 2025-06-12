const model = require('../models/manga');
const Offer = require('../models/offer');

exports.index = (req, res, next) => {
	model.find()
	.then((mangas) => res.render('./manga/index', {mangas}))
	.catch((err) => next(err));
};

exports.new = (req, res) => {
	res.render('./manga/new');
};

exports.create = (req, res, next) => { 
    let manga = new model(req.body);
    manga.seller = req.session.user;
    if (req.file) {
        manga.image = '/images/' + req.file.filename;
    }
    manga.save()
        .then((manga) => {
            req.flash('success', 'Item created successfully!');
            req.session.save(() => res.redirect('/mangas'));
        })
        .catch((err) => {
            if (err.name === 'ValidationError') {
                req.flash('error', 'Validation failed. Please check your input and try again.');
                req.session.save(() => res.redirect('back'));
            } else {
                next(err);
            }
        });
};


exports.show = (req, res, next) => {
	let id = req.params.id;
	model.findById(id).populate('seller', 'firstName lastName')
	.then((manga) => {
		if (manga) {
			res.render('./manga/show', {manga});
		} else {
			let err = new Error('There is no manga with id ' + id);
			err.status = 404;
			next(err);
		}
	})
	.catch(err => next(err));
};

exports.edit = (req, res, next) => {
	let id = req.params.id;
	model.findById(id)
	.then((manga) => {
		return res.render('./manga/edit', {manga});
	})
	.catch(err => next(err));
};

exports.update = (req, res, next) => {
    let manga = req.body;
    let id = req.params.id;

    model.findByIdAndUpdate(id, manga, {useFindAndModify: false, runValidators: true})
        .then((manga) => {
            if (req.file) {
                manga.image = '/images/' + req.file.filename;
                manga.save(); // Save the updated manga document with the new image path
            }
            // Set a success message to notify the user of the successful update
            req.flash('success', 'Item updated successfully!');
            req.session.save(() => res.redirect('/mangas/' + id));
        })
        .catch(err => {
            if (err.name === 'ValidationError') {
                req.flash('error', 'Validation failed. Please check your input and try again.');
                req.session.save(() => res.redirect('back'));
            } else {
                next(err);
            }
        });
};


exports.delete = (req, res, next) => { 
    let id = req.params.id;
    model.findByIdAndDelete(id, {useFindAndModify: false})
        .then((manga) => {
            return Offer.deleteMany({ item: id });
        })
        .then(() => {
            req.flash('success', 'Item deleted successfully!');
            req.session.save(() => res.redirect('/mangas'));
        })
        .catch(err => next(err));
};


exports.search = (req, res, next) => {
    const query = req.query.query ? req.query.query.toLowerCase() : '';
    model.find({
        $and: [
            { $or: [
                { title: { $regex: query, $options: 'i' } },
                { details: { $regex: query, $options: 'i' } }
            ]},
            { active: true }
        ]
    })
    .then((mangas) => {
		res.render('./manga/search', { mangas });
    })
    .catch((err) => next(err));
};

