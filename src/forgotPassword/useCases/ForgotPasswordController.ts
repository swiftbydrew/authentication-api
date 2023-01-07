import { Request, Response } from "express";
import { ForgotPasswordUseCase } from "./ForgotPasswordUseCase";

export class ForgotPasswordController {
    constructor(private forgotPasswordUseCase: ForgotPasswordUseCase){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;
        try {
            await this.forgotPasswordUseCase.recoveryPassword({email})
            return response.status(201).send()
        }
        catch(error) {
            return response.status(400).json({"error": error.message})
        }
    }
}