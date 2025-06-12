const model = require('../models/manga')

exports.index = (req, res, next) => {
	model.find()
	.then((mangas) => res.render('./manga/index', {mangas}))
	.catch((err) => next(err));
};

exports.new = (req, res) => {
	res.render('./manga/new');
};

exports.create =  (req, res, next) => {
	let manga = new model(req.body);
	if(req.file)
	manga.image = '/images/' + req.file.filename;
	manga.save()
	.then((manga) => res.redirect('/mangas'))
	.catch((err) => {
		if (err.name === 'ValidationError') {
			err.status = 400;
		}
		next(err);
	});
};

exports.show = (req, res, next) => {
	let id = req.params.id;
	// validate id format to prevent injection attacks
	if (!id.match(/^[0-9a-fA-F]{24}$/)) {
		let err = new Error('Invalid manga id');
		err.status = 400;
		return next(err);
	}
	model.findById(id)
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
	if (!id.match(/^[0-9a-fA-F]{24}$/)) {
		let err = new Error('Invalid manga id');
		err.status = 400;
		return next(err);
	}
	model.findById(id)
	.then((manga) => {
		if (manga) {
			res.render('./manga/edit', {manga});
		} else {
			let err = new Error('The server cannot locate a manga with id ' + id);
			err.status = 404;
			next(err);
		}
	})
	.catch(err => next(err));
};

exports.update =  (req, res, next) => {
    let manga = req.body;
    let id = req.params.id;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid manga id');
        err.status = 400;
        return next(err);
    }

    model.findByIdAndUpdate(id, manga, {useFindAndModify: false, runValidators: true})
        .then((manga) => {
            if (req.file) {
                manga.image = '/images/' + req.file.filename;
                manga.save(); // Save the updated manga document with the new image path
            }

            if (manga) {
                res.redirect('/mangas/' + id);
            } else {
                let err = new Error('The server cannot locate a manga with id ' + id);
                err.status = 404;
                next(err);
            }
        })
        .catch(err => {
            if (err.name === 'ValidationError') {
                err.status = 400;
            }
            next(err);
        });
};

exports.delete = (req, res, next) => {
	let id = req.params.id;
	if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid manga id');
        err.status = 400;
        return next(err);
    }
	model.findByIdAndDelete(id, {useFindAndModify: false})
	.then((manga) => {
		if (manga) {
            res.redirect('/mangas/');
        } else {
            let err = new Error('The server cannot locate a manga with id ' + id);
            err.status = 404;
            next(err);
        }
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
		if (mangas) {
			res.render('./manga/search', { mangas });
		} else {
			let err = new Error('No manga found matching the query');
            err.status = 404;
            next(err);
        }
    })
    .catch((err) => next(err));
};

