import { isatty } from "tty";
import { LoginUserRepository } from "../repositories/LoginUserRepository";
import { LoginUserDTO } from "./LoginUserDTO";

export class LoginUserUseCase {
    constructor(private loginUserRepository: LoginUserRepository) {}

    async execute(data: LoginUserDTO): Promise<void> {
        this.loginUserRepository.authentication(data);
    }
}