import { Request, Response } from "express";
import { TokenSendingUseCase } from "./TokenSendingUseCase";

export class TokenSendingController {
    constructor(private tokenSendingUseCase: TokenSendingUseCase){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;
        try {
            await this.tokenSendingUseCase.recoveryPassword({email})
            return response.status(200).json({"success": "Send success e-mail."})
        }
        catch(error) {
            return response.status(400).json({"error": error.message})
        }
    }
}