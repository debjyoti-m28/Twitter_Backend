const mongoose = require('mongoose');
const { SALT } = require('../config/serverConfig');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

// password encryption
userSchema.pre('save', function (next) {
    const user = this;
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
})

const User = mongoose.model('User', userSchema)

module.exports = User;