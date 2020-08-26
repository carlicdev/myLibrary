const { Schema, model } = require('mongoose');
const { ObjectId } = Schema;

const orderSchema = new Schema({
    userId: {
        type: ObjectId,
        ref: 'User',
        require: true
    },
    status: {
        type: String,
        default: 'pending'
    },
    order: [{
        type: Object,
        required: true
    }],
    timestamp: {
        type: Date,
        default: Date.now
    },
    total: {
        type: Number,
        required: true
    }

});

module.exports = model('Order', orderSchema);
