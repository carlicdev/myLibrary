const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/products');

router.get('/', productCtrl.get_products);
router.get('/:id', productCtrl.get_single_product);
router.post('/add', productCtrl.new_product);
router.delete('/delete/:id', productCtrl.delete_product);
router.patch('/update/:id', productCtrl.update_product);

module.exports = router;