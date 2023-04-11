const { TweetRepository, CommentRepository } = require("../repository/index")

class CommentService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.commentRepository = new CommentRepository();
    }

    async create (modelId, modelType, userId, content) {
        try {
            if(modelType === 'Tweet') {
               var commentable = await this.tweetRepository.find(modelId);
            }
            else if(modelType === 'Comment') {
              var commentable = await this.commentRepository.get(modelId);
            }
            else{
                throw new Error("Model type is not defined");
            }

            const comment = await this.commentRepository.create({
                content: content,
                onModel: modelType,
                commentable: modelId,
                user: userId,
            });
            commentable.comments.push(comment);
            await commentable.save();
            return comment;

        } catch (error) {
           console.log(error);
        }
    }
}

module.exports  = CommentService;