import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { UserRepositoryImplementation } from "../repositories/implementation/UserRepositoryImplementation";
import { BcryptProvider } from "../../provider/Bcrypt/BcryptProvider";

const bcryptProvider = new BcryptProvider()
const userRepositoryImplementation = new UserRepositoryImplementation(bcryptProvider)
const createUserUseCase = new CreateUserUseCase(userRepositoryImplementation)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }