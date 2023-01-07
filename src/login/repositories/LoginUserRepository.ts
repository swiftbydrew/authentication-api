import { LoginUserDTO } from "../useCases/LoginUserDTO";

export interface LoginUserRepository {
    findByEmail(data: LoginUserDTO)
    matchPassword(data: LoginUserDTO): Promise<void>;
}