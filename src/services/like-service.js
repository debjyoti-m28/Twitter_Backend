const { LikeRepository, TweetRepository } = require("../repository/index");

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike (modelId, modelType, userId) {
        try {
            if(modelType === "Tweet") {
               var likeable = await this.tweetRepository.get(modelId).populate('likes');
            }
            else if (modelType === "Comment") {
               //TODO
            }
            else {
                throw new Error('Unknown model type');
            }

            const likeExists = await this.likeRepository.findByUserAndLikeable({
                onModel: modelType,
                likeable: modelId,
                user: userId
            });

            if(likeExists){
                //remove like
               likeable.likes.pull(likeExists.id);
               await likeable.save();
               await likeExists.remove();
               var isAdded = false;
            }
            else{
              //add like
              const newLike = await this.likeRepository.create({
                onModel: modelType,
                likeable: modelId,
                user: userId
              });
              likeable.likes.push(newLike);
              await likeable.save();
              var isAdded = true;
            }

            return isAdded;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = LikeService;