import { isatty } from "tty";
import { LoginUserRepository } from "../repositories/LoginUserRepository";
import { LoginUserDTO } from "./LoginUserDTO";

export class LoginUserUseCase {
    constructor(private loginUserRepository: LoginUserRepository) {}

    async execute(data: LoginUserDTO): Promise<void> {
        const userAlreadyExists = await this.loginUserRepository.findByEmail(data);
        if (userAlreadyExists == null) {
            throw new Error('User not found in database');
        }
        const matchPassword = await this.loginUserRepository.matchPassword(data);
    }
}