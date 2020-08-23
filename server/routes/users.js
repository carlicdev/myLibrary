const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users');

router.get('/', userCtrl.user_get);
router.post('/signin', userCtrl.signin);
router.post('/login', userCtrl.login);
router.post('/logout', userCtrl.logout);

module.exports = router;