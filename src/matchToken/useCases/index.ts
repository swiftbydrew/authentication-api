import { MatchTokenRepositoryImplementation } from "../repositories/implementation/MatchTokenRepositoryImplementation"
import { MatchTokenController } from "./MatchTokenController"
import { MatchTokenUseCase } from "./MatchTokenUseCase"

const matchTokenRepositoryImplementation = new MatchTokenRepositoryImplementation()
const matchTokenUseCase = new MatchTokenUseCase(matchTokenRepositoryImplementation)
const matchTokenController = new MatchTokenController(matchTokenUseCase)

export { matchTokenUseCase, matchTokenController }