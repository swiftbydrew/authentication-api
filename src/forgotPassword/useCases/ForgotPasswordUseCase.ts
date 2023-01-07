import { ForgotPasswordRepository } from "../repositories/ForgotPasswordRepository";
import { ForgotPasswordDTO } from "./ForgotPasswordDTO";

export class ForgotPasswordUseCase {
    constructor(private forgotPasswordRepository: ForgotPasswordRepository) {}

    async recoveryPassword(data: ForgotPasswordDTO): Promise<void> {
        await this.forgotPasswordRepository.recoveryPassword(data);
    }
}