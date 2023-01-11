import User from "../../../createUser/schemas/User";
import { NewPasswordDTO } from "../../useCases/NewPasswordDTO";
import { NewPasswordRepository } from "../NewPasswordRepository";

export class NewPasswordRepositoryImplementation implements NewPasswordRepository {
    async setNewPassword(data: NewPasswordDTO) {
        const findUser = await User.findOne({"password" : data.hash}).exec()
        if (findUser) {
            User.updateOne(
                { email: findUser.email }, 
                { $set: { password: data.newPassword }}
            )
        } else {
            throw new Error('Unable to change password')
        }
    }
}