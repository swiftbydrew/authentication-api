import { MailtrapMailProvider } from "../../provider/Mailtrap/MailtrapMailProvider"
import { TokenSendingRepositoryImplementation } from "../repositories/implementation/TokenSendingRepositoryImplementation"
import { TokenSendingController } from "./TokenSendingController"
import { TokenSendingUseCase } from "./TokenSendingUseCase"

const tokenSendingRepositoryImplementation = new TokenSendingRepositoryImplementation()
const mailtrapMailProvider = new MailtrapMailProvider()
const tokenSendingUseCase = new TokenSendingUseCase(tokenSendingRepositoryImplementation, mailtrapMailProvider) 
const tokenSendingController = new TokenSendingController(tokenSendingUseCase)

export { tokenSendingUseCase, tokenSendingController }