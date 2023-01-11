import { NewPasswordRepository } from "../repositories/NewPasswordRepository";
import { NewPasswordDTO } from "./NewPasswordDTO";

export class NewPasswordUseCase {
    constructor(private newPasswordRepository: NewPasswordRepository) {}

    async execute(newPassword: NewPasswordDTO): Promise<void> {
        const isValidToken = await this.newPasswordRepository.setNewPassword(newPassword)
        if (isValidToken === null) {
            throw new Error('Token not found in database');
        }
    }
}