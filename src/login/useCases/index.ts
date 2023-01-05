import { BcryptProvider } from "../../provider/Bcrypt/BcryptProvider"
import { LoginUserRepositoryImplementation } from "../repositories/implementation/LoginUserRepositoryImplementation"
import { LoginUserController } from "./LoginUserController"
import { LoginUserUseCase } from "./LoginUserUseCase"

const bcryptProvider = new BcryptProvider()
const loginUserRepositoryImplementation = new LoginUserRepositoryImplementation(bcryptProvider)
const loginUserUseCase = new LoginUserUseCase(loginUserRepositoryImplementation)
const loginUserController = new LoginUserController(loginUserUseCase)

export { loginUserUseCase, loginUserController }