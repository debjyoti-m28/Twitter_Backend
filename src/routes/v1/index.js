const express = require("express");
const createTweet = require("../../controllers/tweet-controller");
const toggleLike = require("../../controllers/like-controller");

const router = express.Router();

router.post('/tweet', createTweet);

router.post('/likes/toggle', toggleLike);

module.exports = router
