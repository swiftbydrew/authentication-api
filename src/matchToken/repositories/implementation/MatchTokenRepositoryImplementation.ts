import User from "../../../createUser/schemas/User";
import { MatchTokenDTO } from "../../useCases/MatchTokenDTO";
import { MatchTokenRepository } from "../MatchTokenRepository";

export class MatchTokenRepositoryImplementation implements MatchTokenRepository {
    async findByToken(data: MatchTokenDTO) {
        const findToken = await User.findOne({"token" : data.token}).exec()
        return findToken
    }
}