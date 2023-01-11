import { NewPasswordDTO } from "../useCases/NewPasswordDTO";

export interface NewPasswordRepository {
    setNewPassword(data: NewPasswordDTO)
}