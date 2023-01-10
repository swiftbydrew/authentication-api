import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGOOSE_CONNECT);

const database = mongoose.connection;

export default { database }