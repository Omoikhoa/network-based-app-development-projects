const model = require('../models/manga')
const {v4: uuidv4} = require('uuid');

exports.index = (req, res) => {
    let mangas = model.find();
    res.render('./manga/index', {mangas});
};

exports.new = (req, res) => {
    res.render('./manga/new');
};

exports.create =  (req, res) => {
    let manga = req.body;
    manga.image = '/images/' + req.file.filename;
    model.save(manga);
    res.redirect('/mangas');
};

exports.show = (req, res, next) => {
    let id = req.params.id;
    let manga = model.findById(id);
    if (manga) {
        res.render('./manga/show', {manga});
    } else {
        let err = new Error('There is no manga with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.edit = (req, res, next) => {
    let id = req.params.id;
    let manga = model.findById(id);
    if (manga) {
        res.render('./manga/edit', {manga});
    } else {
        let err = new Error('The server cannot locate a manga with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.update =  (req, res, next) => {
    let id = req.params.id;
    let manga = model.findById(id);
    if (!manga) {
        let err = new Error('There is no manga with id ' + id);
        err.status = 404;
        return next(err);
    }
    manga.title = req.body.title || manga.title;
    manga.seller = req.body.seller || manga.seller;
    manga.condition = req.body.condition || manga.condition;
    manga.price = req.body.price || manga.price;
    manga.details = req.body.details || manga.details;
    if (req.file) {
        manga.image = '/images/' + req.file.filename;
    }
    if (model.updateById(id, manga)) {
        res.redirect('/mangas/' + id);
    } else {
        let err = new Error('Cannot update manga with id ' + id);
        err.status = 500;
        next(err);
    }
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    if (model.deleteById(id)) {
        res.redirect('/mangas/');
    } else {
        let err = new Error('There is no manga with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.search = (req, res) => {
    let mangas = model.find(); 
    const query = req.query.query ? req.query.query.toLowerCase() : '';
    if (query) {
        mangas = mangas.filter(manga =>
            (manga.title.toLowerCase().includes(query) || manga.details.toLowerCase().includes(query)) && manga.active
        );
    } else {
        mangas = mangas.filter(manga => manga.active);
    }
    res.render('./manga/search', { mangas }); 
};