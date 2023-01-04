import express from 'express'
import { router } from './routes'
import cors from 'cors'
import mongo from './mongodb/MongoDBConnect'
import { Logger } from './helper/LoggerHelper'

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

mongo.database.on('error', console.log.bind(console, 'CONNECTION DATABASE ERROR'))
mongo.database.once('open', () => {
    Logger.prettyLog('DATABASE CONNECTION')
})

export { app }    