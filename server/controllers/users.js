const User = require('../models/user');

// Handle errors
const handleErrors = (err) => {
    let errors = { username: '', email: '', password: ''};

    // duplicate error code
    if (err.code === 11000) {
        errors[Object.keys(err.keyValue)[0]] = 
            `${Object.keys(err.keyValue)[0]} '${Object.values(err.keyValue)[0]}' is already taken`;
        return errors;
    }

    // validation errors
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        })
    }

    return errors;
}

exports.user_get = (req, res) => {
    res.send('from user_get');
};

exports.signin = async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({username, email, password});
    try {
        let user = await newUser.save();
        res.send(user);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

exports.login = (req, res) => {
    res.send('from login')
};

exports.logout = (req, res) => {
    res.send('from logout')
};
