const { UserRepository } = require("../repository/index")

class UserService {
    constructor () {
       this.userRepository = new UserRepository();
    }

    async create () {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserService;