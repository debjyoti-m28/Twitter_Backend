const { TweetRepository, HashtagRepository } = require("../repository/index")

class TweetService {
    constructor () {
        this.tweetRepository = new TweetRepository(),
        this.hashtagRepository = new HashtagRepository()
    }

    async create (data) {
        try {
            //create tweet
            const tweet = await this.tweetRepository.create(data)

            // find already present hasgtags
            const content = data.content
            let tags = content.match(/#[a-zA-Z0-9_]+/g) // this regex extracts hashtags from tweet
            tags = tags.map(tag => tag.substring(1))
            console.log("tags", tags)

            const alreadyPresentTags = await this.hashtagRepository.findByName(tags)
            console.log("Ptags", alreadyPresentTags)
            const titleOfAlreadyPresentTags = alreadyPresentTags.map(tag => tag.title)
            console.log("TPtags", titleOfAlreadyPresentTags)

            // filter new hashtags that are not already present
            let newTags = tags.filter(tag => !titleOfAlreadyPresentTags.includes(tag))
            
            //create hashtag
            newTags = newTags.map(tag => {
                return {title: tag, tweets: [tweet.id]}
            })
            console.log("Ntags", newTags)
            const response = await this.hashtagRepository.bulkCreate(newTags)
            console.log("res", response)

            //append the new tweet id in the already present hashtags
            alreadyPresentTags.forEach(tag=> {
                tag.tweets.push(tweet.id);
                tag.save();
            })

            return tweet;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = TweetService