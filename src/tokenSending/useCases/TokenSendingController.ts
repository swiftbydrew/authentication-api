import { Request, Response } from "express";
import { JwtProviderInterface } from "../../provider/Jwt/JwtProviderInterface";
import { TokenSendingUseCase } from "./TokenSendingUseCase";

export class TokenSendingController {
    constructor(private tokenSendingUseCase: TokenSendingUseCase, private jwtProvider: JwtProviderInterface){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;
        try {
            const hash = await this.tokenSendingUseCase.recoveryPassword({email})
            const jwt = await this.jwtProvider.jwtSign(email)
            return response.status(200).json({"jwt": jwt})
        }
        catch(error) {
            return response.status(400).json({"error": error.message})
        }
    }
}