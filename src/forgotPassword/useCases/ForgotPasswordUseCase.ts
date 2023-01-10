import User from "../../createUser/schemas/User";
import { IMailProvider } from "../../provider/Mailtrap/IMailProvider";
import { ForgotPasswordRepository } from "../repositories/ForgotPasswordRepository";
import { ForgotPasswordDTO } from "./ForgotPasswordDTO";

export class ForgotPasswordUseCase {
    constructor(private forgotPasswordRepository: ForgotPasswordRepository, private mailProvider: IMailProvider) {}

    async recoveryPassword(data: ForgotPasswordDTO): Promise<void> {
        const foundUserByEmail = await this.forgotPasswordRepository.findByEmail(data);
        if (foundUserByEmail == null) {
            throw new Error('Error when trying to follow password recovery progress')
        }

        const token = await this.forgotPasswordRepository.updateToken(data)

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