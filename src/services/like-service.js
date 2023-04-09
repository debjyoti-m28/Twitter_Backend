const { LikeRepository, TweetRepository } = require("../repository/index");

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike () {
        try {
            F
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = LikeService;