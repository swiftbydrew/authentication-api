import { JwtProviderInterface } from "./JwtProviderInterface";
import jwt from 'jsonwebtoken'

export class JwtProvider implements JwtProviderInterface {
    async jwtSign(id: string): Promise<string> {
        const token = jwt.sign({ id: id}, 'secret', { expiresIn: '1d'});
        return token
    }
}