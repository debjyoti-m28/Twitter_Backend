const { TweetRepository, HashtagRepository } = require("../repository/index")

class TweetService {
    constructor () {
        this.tweetRepository = new TweetRepository(),
        this.hashtagRepository = new HashtagRepository()
    }

    async create (data) {
        try {
            const content = data.content
            const tags = content.match(/#[a-zA-Z0-9_]+/g) // this regex extracts hashtags from tweet
            tags = tags.map(tag => tag.substring(1))
            console.log("tags", tags)
            const tweet = await this.tweetRepository.create(content)
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = TweetService