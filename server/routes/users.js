const express = require('express');
const router = express.Router();
const passport = require('../passport/passport');

const userCtrl = require('../controllers/users');

router.get('/', userCtrl.user_get);
router.post('/signin', userCtrl.signin);
router.post('/login', passport.authenticate('local'), userCtrl.login);
router.post('/logout', userCtrl.logout);

module.exports = router;