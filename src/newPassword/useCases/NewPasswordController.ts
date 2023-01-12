import { Request, Response } from "express";
import { NewPasswordUseCase } from "./NewPasswordUseCase";

export class NewPasswordController {
    constructor(private newPasswordUseCase: NewPasswordUseCase){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { newPassword, email } = request.body;
        try {
            await this.newPasswordUseCase.execute({newPassword, email})
            return response.status(201).send()
        }
        catch(error) {
            return response.status(400).json({"error": error.message})
        }
    }
}