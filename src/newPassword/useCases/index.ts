import { NewPasswordRepositoryImplementation } from "../repositories/implementation/NewPasswordRepositoryImplementation"
import { NewPasswordController } from "./NewPasswordController"
import { NewPasswordUseCase } from "./NewPasswordUseCase"

const newPasswordRepositoryImplementation = new NewPasswordRepositoryImplementation()
const newPasswordUseCase = new NewPasswordUseCase(newPasswordRepositoryImplementation)
const newPasswordController = new NewPasswordController(newPasswordUseCase)

export { newPasswordUseCase, newPasswordController }