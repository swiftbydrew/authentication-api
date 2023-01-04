import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { MongoDBUsersRepository } from "../repositories/implementation/MongoDBUsersRepository";
import { BcryptProvider } from "../providers/Bcrypt/BcryptProvider";

const bcryptProvider = new BcryptProvider()
const mongoDBUsersRepository = new MongoDBUsersRepository(bcryptProvider)
const createUserUseCase = new CreateUserUseCase(mongoDBUsersRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }