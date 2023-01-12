import { Router } from "express";
import { createUserController } from "./createUser/useCases";
import { tokenSendingController } from "./tokenSending/useCases";
import { loginUserController } from "./login/useCases";
import { matchTokenController } from "./matchToken/useCases";
import authMiddleware from "./middleware/authMiddleware";
import { newPasswordController } from "./newPassword/useCases";

const router = Router()

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.post('/login', (request, response) => {
    return loginUserController.handle(request, response);
});

router.post('/token-sending', (request, response) => {
    return tokenSendingController.handle(request, response);
});

router.post('/match-token', authMiddleware, (request, response) => {
    return matchTokenController.handle(request, response);
});

router.post('/new-password', authMiddleware, (request, response) => {
    return newPasswordController.handle(request, response);
});

export { router }