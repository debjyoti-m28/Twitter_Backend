const  TweetService  = require("../services/tweet-service")
const { SuccessCodes, ServerErrorCodes } = require("../utils/error-codes")
const tweetService = new TweetService()

const createTweet = async (req, res) => {
     try {
            const response = await tweetService.create(req.body)
            return res.status(SuccessCodes.CREATED).json({
                sucess: true,
                data: response,
                message: "Tweet has been created successfully",
                err: {}
            })
        } catch (error) {
            return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
                sucess: false,
                data: {},
                message: "Something went wrong, Unable to create tweet",
                err: error
            })
        }
}

module.exports = createTweet;