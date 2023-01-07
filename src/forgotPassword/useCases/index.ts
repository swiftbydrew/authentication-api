import { MailtrapMailProvider } from "../../provider/Mailtrap/MailtrapMailProvider"
import { ForgotPasswordRepositoryImplementation } from "../repositories/implementation/ForgotPasswordRepositoryImplementation"
import { ForgotPasswordController } from "./ForgotPasswordController"
import { ForgotPasswordUseCase } from "./ForgotPasswordUseCase"

const forgotPasswordRepositoryImplementation = new ForgotPasswordRepositoryImplementation()
const mailtrapMailProvider = new MailtrapMailProvider()
const forgotPasswordUseCase = new ForgotPasswordUseCase(forgotPasswordRepositoryImplementation, mailtrapMailProvider) 
const forgotPasswordController = new ForgotPasswordController(forgotPasswordUseCase)

export { forgotPasswordUseCase, forgotPasswordController }