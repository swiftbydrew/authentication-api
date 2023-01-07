import { UserEntity } from "../../entities/User";
import { BcryptProviderInterface } from "../../../provider/Bcrypt/BcryptProviderInterface";
import User from "../../schemas/User";
import { CreateUserRequestDTO } from "../../useCases/CreateUserDTO";
import { UsersRepository } from "../UsersRepository";

export class UserRepositoryImplementation implements UsersRepository {
    constructor(private bcrypt: BcryptProviderInterface) {}

    async findByEmail(data: CreateUserRequestDTO) {
        const findUser = await User.findOne({"email" : data.email}).exec()
        return findUser
    }

    async save(user: UserEntity): Promise<void> {
        const cryptPassword = await this.bcrypt.cryptPassword(user.password)
        const newUser = new User({email: user.email, fullname: user.fullname, birthday: user.birthday, password: cryptPassword, token: null })
        newUser.save(function(error) {
            if (error) {
                throw new Error('An error occurred when trying to save the user in the database');
            }
        })
    }
}