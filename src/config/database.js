const mongoose = require("mongoose")
const { MONGO_URL } = require("./serverConfig")

const connetToMongoDB = async () => {
    await mongoose.connect(`${MONGO_URL}/Twitter_Dev`)
}

module.exports = connetToMongoDB