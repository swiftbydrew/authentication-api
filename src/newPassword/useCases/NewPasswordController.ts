import { Request, Response } from "express";
import { NewPasswordUseCase } from "./NewPasswordUseCase";

export class NewPasswordController {
    constructor(private newPasswordUseCase: NewPasswordUseCase){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { newPassword, hash } = request.body;
        try {
            await this.newPasswordUseCase.execute({newPassword, hash})
            return response.status(201).send()
        }
        catch(error) {
            return response.status(400).json({"error": error.message})
        }
    }
}