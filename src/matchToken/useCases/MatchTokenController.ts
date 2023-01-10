import { Request, Response } from "express";
import { MatchTokenUseCase } from "./MatchTokenUseCase";

export class MatchTokenController {
    constructor(private matchTokenUseCase: MatchTokenUseCase){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { token } = request.body;
        try {
            await this.matchTokenUseCase.execute({token})
            return response.status(201).send()
        }
        catch(error) {
            return response.status(400).json({"error": error.message})
        }
    }
}