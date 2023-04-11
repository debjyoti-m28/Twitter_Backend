const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

dotenv.config()

module.exports = {
    PORT : process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    SALT: bcrypt.genSaltSync(10)
}