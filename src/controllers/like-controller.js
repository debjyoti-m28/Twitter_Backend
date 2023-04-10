const LikeService = require("../services/like-service");
const { SuccessCodes, ServerErrorCodes } = require("../utils/error-codes")
const likeService = new LikeService();

const toggleLike = async (req, res) => {
    try {
        const response = await likeService.toggleLike(req.params.modelId, req.params.modelType, req.body.userId);
        res.status(SuccessCodes.OK).json({
            sucess: true,
            data: response,
            message: "Sucessfully toggled like",
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

module.exports = toggleLike;