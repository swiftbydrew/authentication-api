import { app } from "./app";
import { Logger } from "./helper/LoggerHelper";

app.listen(8080, () => {
    Logger.prettyLog('SERVER RUNNING')
})