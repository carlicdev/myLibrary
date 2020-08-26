const Order = require('../models/order');

exports.get_all_orders = (req, res) => {
    res.send('hello from all_orders');
};  
exports.get_single_order = (req, res) => {
    res.send('hello from single');
};
exports.post_order = async (req, res) => {
    console.log(req.user);
    const newOrder = new Order({
        userId: req.body.userId,
        order: req.body.order,
        total: req.body.total,
    });
    try {
        const order = await newOrder.save();
        res.status(201).json({order});
    } catch(err) {
        console.log(err);
        res.send(err);
    }
};

exports.delete_order = (req, res) => {
    res.send('hello from del');
};
exports.update_order = (req, res) => {
    res.send('hello from update');
};