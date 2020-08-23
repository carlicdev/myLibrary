const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please choose a username'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please include an email'],
        unique: true
    },
    password: {
        type: String, 
        required: [true, 'Please choose a password'],
        minlength: [6, 'Password must be at least 6 characters long']
    }
});

userSchema.methods = {
    checkPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
    },

    hashPassword: function(password) {
        return bcrypt.hashSync(password, 10);
    }
};

userSchema.pre('save', function(next) {
    if (!this.password) {
        next();
    } else {
        this.password = this.hashPassword(this.password);
        next();
    }
});

module.exports = model('User', userSchema);
