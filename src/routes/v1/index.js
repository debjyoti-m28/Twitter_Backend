const express = require("express");
const createTweet = require("../../controllers/tweet-controller")

const router = express.Router();

router.post('/tweet', createTweet)

module.exports = router
