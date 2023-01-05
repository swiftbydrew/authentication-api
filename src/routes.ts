import { Router } from "express";
import { createUserController } from "./createUser/useCases";
import { loginUserController } from "./login/useCases";

const router = Router()

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.post('/login', (request, response) => {
    return loginUserController.handle(request, response);
});

export { router }