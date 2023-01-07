import { ForgotPasswordDTO } from "../useCases/ForgotPasswordDTO";

export interface ForgotPasswordRepository {
    recoveryPassword(data: ForgotPasswordDTO): Promise<void>;
}