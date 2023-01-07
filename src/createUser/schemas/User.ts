import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    email: String,
    fullname: String,
    birthday: String,
    password: String,
    token: Number
})

export default model('User', UserSchema)