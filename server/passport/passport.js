const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const User = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, {_id: user._id});
});

passport.deserializeUser((id, done) => {
    console.log('deserializing user')
    User.findOne({_id: id}, (err, user) => {
        done(null, user);
    });
});

passport.use(LocalStrategy);

module.exports = passport;