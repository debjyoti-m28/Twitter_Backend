const { UserService } = require("../services/index");
const { ServerErrorCodes, SuccessCodes } = require("../utils/error-codes");

const userService = new UserService();

const signup = async (req, res) => {
    try {
        const user = await userService.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        })
        return res.status(SuccessCodes.CREATED).json({
            data: user,
            success: true,
            message: "Successfully created the new user.",
            err: {}
        })
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Something went wrong",
            err: error
        })
    }
}

module.exports = signup;