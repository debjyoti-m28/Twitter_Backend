const Like = require("../models/like");
const { CrudRepository } = require("../repository/index")

class LikeRepository extends CrudRepository () {
    constructor () {
        super(Like)
    }
}

module.exports = LikeRepository;