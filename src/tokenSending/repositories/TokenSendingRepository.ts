import { TokenSendingDTO } from "../useCases/TokenSendingDTO";

export interface TokenSendingRepository {
    findByEmail(data: TokenSendingDTO)
    updateToken(data: TokenSendingDTO): Promise<number>
}