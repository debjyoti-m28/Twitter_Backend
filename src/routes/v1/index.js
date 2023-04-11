const express = require("express");
const createTweet = require("../../controllers/tweet-controller");
const toggleLike = require("../../controllers/like-controller");
const createComment = require("../../controllers/comment-controller");

const router = express.Router();

//tweets
router.post('/tweet', createTweet);

//likes
router.post('/likes/toggle', toggleLike);

//comments
router.post('/comment', createComment);

module.exports = router
