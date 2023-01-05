import { Request, Response } from "express";
import { JwtProviderInterface } from "../../provider/Jwt/JwtProviderInterface";
import { LoginUserUseCase } from "./LoginUserUseCase";

export class LoginUserController {
    constructor(private loginUserUseCase: LoginUserUseCase, private jwtProvider: JwtProviderInterface){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;
        try {
            const loginUser = await this.loginUserUseCase.execute({email, password})
            const jwt = await this.jwtProvider.jwtSign(email)
            return response.status(201).json({"token": jwt})
        }
        catch(error) {
            return response.status(400).json({"error": error.message})
        }
    }
}