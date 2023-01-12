import User from "../../../createUser/schemas/User";
import { BcryptProviderInterface } from "../../../provider/Bcrypt/BcryptProviderInterface";
import { NewPasswordDTO } from "../../useCases/NewPasswordDTO";
import { NewPasswordRepository } from "../NewPasswordRepository";

export class NewPasswordRepositoryImplementation implements NewPasswordRepository {
    constructor(private bcrypt: BcryptProviderInterface) {}

    async setNewPassword(data: NewPasswordDTO) {
        const findUser = await User.findOne({"email" : data.email}).exec()
        if (findUser) {
            const newCryptPassword = await this.bcrypt.cryptPassword(data.newPassword)
            await User.updateOne(
                { email: data.email }, 
                { $set: { password: newCryptPassword }}
            )
        } else {
            throw new Error('Unable to change password')
        }
    }
}