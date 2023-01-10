import { JwtProviderInterface } from "./JwtProviderInterface";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();

export class JwtProvider implements JwtProviderInterface {
    async jwtSign(id: string): Promise<string> {
        const token = jwt.sign({ id: id}, process.env.JWT_SIGN, { expiresIn: '1d'});
        return token
    }
}