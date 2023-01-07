import User from "../../../createUser/schemas/User";
import { ForgotPasswordDTO } from "../../useCases/ForgotPasswordDTO";
import { ForgotPasswordRepository } from "../ForgotPasswordRepository";

export class ForgotPasswordRepositoryImplementation implements ForgotPasswordRepository {
    async findByEmail(data: ForgotPasswordDTO) {
        const findUser = await User.findOne({"email" : data.email}).exec()
        return findUser
    }

    async updateToken(data: ForgotPasswordDTO): Promise<number> {
        const token = Math.floor(100000 + Math.random() * 900000)
        User.updateOne(
            { email: data.email }, 
            { $set: { token: token }}, function(error, result) {
                console.log(error)
                console.log(result)
            }
        )
        return token
    }
}