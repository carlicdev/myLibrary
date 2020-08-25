const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Please include a product name']
    },
    category: {
        type: String, 
        required: [true, 'Please include a category']
    },
    description: {
        type: String,
        required: [true, 'Please include a product description']
    },
    onStore: {
        type: Number,
        required: [true, 'Please include how many items of this product you have on store']
    },
    price: {
        type: Number,
        required: [true, 'Please include the product price']
    }
});

module.exports = model('Product', productSchema);