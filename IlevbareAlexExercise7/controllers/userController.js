const User = require('../models/user');

exports.getSignUpForm = (req, res) => {
  res.render('user/new');
};

exports.createUser = (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then(() => {
        req.flash('success', 'Account created successfully!');
        res.redirect('/users/login');
    })
    .catch(err => {
      if (err.name === 'ValidationError') {
        req.flash('error', err.message);
        return res.redirect('/users/new');
      }
      if (err.code === 11000) {
        req.flash('error', 'Email address has been used');
        return res.redirect('/users/new');
      }
      next(err);
    });
};

exports.getLoginForm = (req, res) => {
  res.render('user/login');
};

exports.loginUser = (req, res, next) => {
    let email = req.body.email;
	let password = req.body.password;
    User.findOne({ email: email })
    .then(user => {
        if(user) {
            // user found in the database
            user.comparePassword(password)
            .then(result => {
                if(result) {
                    req.session.user = user._id; // store user's id in the session
                    req.flash('success', 'You have successfully logged in');
                    res.redirect('/users/profile');
                } else {
                    // console.log('Wrong Password');
                    req.flash('error', 'Wrong Password!');
                    res.redirect('/users/login');
                }
            })
        } else {
            // console.log('Wrong Email Address');
            req.flash('error', 'Wrong Email Address!');
            res.redirect('/users/login');
        }
    })
    .catch(err => next(err));
};

exports.getProfile = (req, res, next) => {
  User.findById(req.session.user)
    .then(user => res.render('user/profile', { user }))
    .catch(err => next(err));
};

exports.logoutUser = (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      return next(err);
    } else {
      res.redirect('/');
    }
  });
};