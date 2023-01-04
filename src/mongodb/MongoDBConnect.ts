import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://killandrew:bjXJc8WChIZVsaxV@killcluster.dlsxozm.mongodb.net/kill_database');

const database = mongoose.connection;

export default { database }