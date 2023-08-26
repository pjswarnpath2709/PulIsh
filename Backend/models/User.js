import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter your name"]
    },
    email: {
        type: String,
        required: [true, "please enter your email"],
        unique: [true, "email already exists"]
    },
    password: {
        type: String,
        required: [true, "please enter password"],
        minLength: [6, "password must be atleast of 6 characters"]
    },
    avatar: {
        public_id: String,
        url: String,
    },

})

const User = mongoose.model("User", userSchema);
export default User;