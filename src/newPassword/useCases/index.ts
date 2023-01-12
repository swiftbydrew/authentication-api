import { BcryptProvider } from "../../provider/Bcrypt/BcryptProvider"
import { NewPasswordRepositoryImplementation } from "../repositories/implementation/NewPasswordRepositoryImplementation"
import { NewPasswordController } from "./NewPasswordController"
import { NewPasswordUseCase } from "./NewPasswordUseCase"

const bcrypt = new BcryptProvider()
const newPasswordRepositoryImplementation = new NewPasswordRepositoryImplementation(bcrypt)
const newPasswordUseCase = new NewPasswordUseCase(newPasswordRepositoryImplementation)
const newPasswordController = new NewPasswordController(newPasswordUseCase)

export { newPasswordUseCase, newPasswordController }