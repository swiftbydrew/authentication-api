import { LoginUserDTO } from "../useCases/LoginUserDTO";

export interface LoginUserRepository {
    authentication(data: LoginUserDTO): Promise<void>;
}