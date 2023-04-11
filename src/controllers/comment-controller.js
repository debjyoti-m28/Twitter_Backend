const CommentService = require("../services/comment-service");
const { SuccessCodes, ServerErrorCodes } = require("../utils/error-codes")
const commentService = new CommentService();

const createComment = async (req, res) => {
    try {
        const response = await commentService.create(req.query.modelId, req.query.modelType, req.body.userId, req.body.content);
        res.status(SuccessCodes.OK).json({
            sucess: true,
            data: response,
            message: "Sucessfully created comment",
            err: {}
        })
    } catch (error) {
        res.status(ServerErrorCodes).json({
            sucess: false,
            data: {},
            message: "Something went wrong",
            err: error
        })
    }
}

module.exports = createComment;