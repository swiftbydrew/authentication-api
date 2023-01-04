import { UserEntity } from "../entities/User";
import { CreateUserRequestDTO } from "../useCases/CreateUserDTO";

export interface UsersRepository {
    findByEmail(data: CreateUserRequestDTO)
    save(user: UserEntity): Promise<void>;
}