import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { MongoDBUsersRepository } from "../repositories/implementation/MongoDBUsersRepository";

const mongoDBUsersRepository = new MongoDBUsersRepository()
const createUserUseCase = new CreateUserUseCase(mongoDBUsersRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }