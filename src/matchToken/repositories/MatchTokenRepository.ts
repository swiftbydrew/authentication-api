import { MatchTokenDTO } from "../useCases/MatchTokenDTO";

export interface MatchTokenRepository {
    findByToken(data: MatchTokenDTO)
}