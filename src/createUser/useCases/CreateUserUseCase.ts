import { UserEntity } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";
import { CreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(private usersRepository: UsersRepository) {}

    async execute(data: CreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data);
        if (userAlreadyExists) {
            throw new Error('User found in database');
        }
        const user = new UserEntity(data);
        await this.usersRepository.save(user);
    }
}