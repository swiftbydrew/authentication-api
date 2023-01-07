import { Router } from "express";
import { createUserController } from "./createUser/useCases";
import { forgotPasswordController } from "./forgotPassword/useCases";
import { loginUserController } from "./login/useCases";
import authMiddleware from "./middleware/authMiddleware";

const router = Router()

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.post('/login', (request, response) => {
    return loginUserController.handle(request, response);
});

router.post('/forgot-password', authMiddleware, (request, response) => {
    return forgotPasswordController.handle(request, response);
});

export { router }