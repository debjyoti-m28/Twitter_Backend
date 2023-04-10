const express = require('express')
const { PORT } = require('./config/serverConfig')
const connetToMongoDB = require('./config/database')
const bodyParser = require("body-parser");
const apiRoute = require("./routes/index")
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoute);

app.listen(PORT, async()=> {
    console.log(`Server running on port ${PORT}`)
    await connetToMongoDB();
    console.log("mongodb connected")
});
