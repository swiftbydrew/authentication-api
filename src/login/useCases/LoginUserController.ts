import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";

export class LoginUserController {
    constructor(private loginUserUseCase: LoginUserUseCase){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;
        try {
            await this.loginUserUseCase.execute({email, password})
            return response.status(201).send();
        }
        catch(error) {
            return response.status(400).json({"error": error.message})
        }
    }
}