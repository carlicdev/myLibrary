const Order = require('../models/order');

exports.get_all_orders = async (req, res) => {
    console.log(req.user)
        if (req.user != undefined) {
            console.log('entered orders')
            const orders = await Order.find({userId: req.user._id});
            res.status(200).json({orders})
        }
};  

exports.get_single_order = (req, res) => {
    res.send('hello from single');
};
exports.post_order = async (req, res) => {
    if (req.user) {
        const newOrder = new Order({
            userId: req.user._id,
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
    } else {
        res.status(400).json({ msg: 'Please log in'})
    }
};

exports.delete_order = (req, res) => {
    res.send('hello from del');
};
exports.update_order = (req, res) => {
    res.send('hello from update');
};