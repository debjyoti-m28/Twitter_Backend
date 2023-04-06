const express = require('express')
const { PORT } = require('./config/serverConfig')
const connetToMongoDB = require('./config/database')
const {TweetService} = require("./services/index")
const Hashtag = require("./models/hashtag")
const app = express()

app.listen(PORT, async()=> {
    console.log(`Server running on port ${PORT}`)
    await connetToMongoDB();
    console.log("mongodb connected")
    let tweetService = new TweetService()
    const tweet = await tweetService.create({
        content: '#fourst and #last tweet, I am very #excited'
    })
    console.log("tweet", tweet)
})
