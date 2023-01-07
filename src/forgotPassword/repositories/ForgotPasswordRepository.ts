import { ForgotPasswordDTO } from "../useCases/ForgotPasswordDTO";

export interface ForgotPasswordRepository {
    findByEmail(data: ForgotPasswordDTO)
    generatedToken(): number
}