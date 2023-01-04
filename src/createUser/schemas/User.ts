import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    email: String,
    fullname: String,
    birthday: String,
    password: String
})

export default model('User', UserSchema)