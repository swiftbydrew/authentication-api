import bcrypt from 'bcrypt'
import { BcryptProviderInterface } from './BcryptProviderInterface';

export class BcryptProvider implements BcryptProviderInterface {
    async cryptPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(11);
        const hash = bcrypt.hashSync(password, salt);
        return hash
    }

    async comparePassword(password: string, hash: string): Promise<boolean> {
        const compareResult = bcrypt.compare(password, hash)
        return compareResult
    }
}