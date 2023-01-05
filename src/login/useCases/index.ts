import { BcryptProvider } from "../../provider/Bcrypt/BcryptProvider"
import { JwtProvider } from "../../provider/Jwt/JwtProvider"
import { LoginUserRepositoryImplementation } from "../repositories/implementation/LoginUserRepositoryImplementation"
import { LoginUserController } from "./LoginUserController"
import { LoginUserUseCase } from "./LoginUserUseCase"

const bcryptProvider = new BcryptProvider()
const loginUserRepositoryImplementation = new LoginUserRepositoryImplementation(bcryptProvider)
const loginUserUseCase = new LoginUserUseCase(loginUserRepositoryImplementation)
const jwtProvider = new JwtProvider()
const loginUserController = new LoginUserController(loginUserUseCase, jwtProvider)

export { loginUserUseCase, loginUserController }