import { ForgotPasswordDTO } from "../useCases/ForgotPasswordDTO";

export interface ForgotPasswordRepository {
    findByEmail(data: ForgotPasswordDTO)
    updateToken(data: ForgotPasswordDTO): Promise<number>
}