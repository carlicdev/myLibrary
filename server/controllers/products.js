const Product = require('../models/product');

const handleErrors = (err) => {
    let errors = { 
        name: '', 
        category: '', 
        description: '', 
        onStore: '', 
        price: ''
    };

    if (err.message.includes('Product validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

exports.get_products = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({products})
};

exports.get_single_product = async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.status(200).json({product})
};

exports.new_product = async (req, res) => {
    const newProduct = new Product(req.body)
    try {
        const product = await newProduct.save();
        res.status(201).json({product})
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({errors})
    }
};

exports.delete_product = async (req, res) => {
    await Product.findOneAndRemove({_id: req.params.id})
        .then(() => res.status(200).json({msg: 'Product deleted'}))
        .catch(err => res.status(400).json({msg: 'couldn´t delete product'}))
};

exports.update_product = (req, res) => {
    res.send('Hello from update_product');
};