import { IMailProvider } from "../../provider/Mailtrap/IMailProvider";
import { TokenSendingRepository } from "../repositories/TokenSendingRepository";
import { TokenSendingDTO } from "./TokenSendingDTO";

export class TokenSendingUseCase {
    constructor(private tokenSendingRepository: TokenSendingRepository, private mailProvider: IMailProvider) {}

    async recoveryPassword(data: TokenSendingDTO): Promise<void> {
        const foundUserByEmail = await this.tokenSendingRepository.findByEmail(data);
        if (foundUserByEmail == null) {
            throw new Error('Error when trying to follow password recovery progress')
        }

        const token = await this.tokenSendingRepository.updateToken(data)

        await this.mailProvider.sendMail({
            to: {
              name: foundUserByEmail.fullname,
              email: data.email,
            },
            from: {
              name: 'Administrador',
              email: 'noreply <swiftbydrew@outlook.com>',
            },
            subject: 'Recuperação de senha.',
            body: `<p>Insira o token para recuperar sua senha. <b>${token}</b></p>`
        })
    }
}