import User from "../../../createUser/schemas/User";
import { TokenSendingDTO } from "../../useCases/TokenSendingDTO";
import { TokenSendingRepository } from "../TokenSendingRepository";

export class TokenSendingRepositoryImplementation implements TokenSendingRepository {
    async findByEmail(data: TokenSendingDTO) {
        const findUser = await User.findOne({"email" : data.email}).exec()
        return findUser
    }

    async updateToken(data: TokenSendingDTO): Promise<number> {
        const token = Math.floor(100000 + Math.random() * 900000)
        User.updateOne(
            { email: data.email }, 
            { $set: { token: token }}
        )
        return token
    }
}