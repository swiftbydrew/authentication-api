import User from "../../../createUser/schemas/User";
import authMiddleware from "../../../middleware/authMiddleware";
import { BcryptProviderInterface } from "../../../provider/Bcrypt/BcryptProviderInterface";
import { LoginUserDTO } from "../../useCases/LoginUserDTO";
import { LoginUserRepository } from "../LoginUserRepository";

export class LoginUserRepositoryImplementation implements LoginUserRepository {
    constructor(private bcrypt: BcryptProviderInterface) {}

    async authentication(data: LoginUserDTO): Promise<void> {
        const userAlreadyExists = await this.findByEmail(data);
        if (userAlreadyExists == null) {
            throw new Error('User not found in database');
        }
        const matchPassword = await this.matchPassword(data);
    }

    async findByEmail(data: LoginUserDTO) {
        const findUser = await User.findOne({"email" : data.email}).exec()
        return findUser
    }

    async matchPassword(data: LoginUserDTO): Promise<void> {
        const findUser = await User.findOne({"email" : data.email}).exec()
        const comparePassword = await this.bcrypt.comparePassword(data.password, findUser.password)
        if (comparePassword == false) {
            throw new Error('Comparison of password with hash failed')
        }
    }
}