import { MatchTokenRepository } from "../repositories/MatchTokenRepository";
import { MatchTokenDTO } from "./MatchTokenDTO";

export class MatchTokenUseCase {
    constructor(private matchTokenRepository: MatchTokenRepository) {}

    async execute(data: MatchTokenDTO): Promise<void> {
        const isValidToken = await this.matchTokenRepository.findByToken(data)
        if (isValidToken === null) {
            throw new Error('Token not found in database');
        }
    }
}