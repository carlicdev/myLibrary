const express = require('express');
const router = express.Router();

const ordersCtrl = require('../controllers/orders');

router.get('/', ordersCtrl.get_all_orders);
router.get('/:id', ordersCtrl.get_single_order);
router.post('/', ordersCtrl.post_order);
router.delete('/:id', ordersCtrl.delete_order);
router.put('/:id', ordersCtrl.update_order);

router.post('/place-order/:orderId', ordersCtrl.place_order);

module.exports = router;