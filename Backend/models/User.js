import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter your name"]
    },
    email: {
        type: String,
        required: [true, "plesse enter your email"],
        unique: [true, "email already exists"]
    },
    password: {
        type: String,
        required: [true, "plese enter password"],
        minLength: [8, "password must be atleast of 6 characters"]
    },
    avatar: {
        public_id: String,
        url: String,
    },

})

const User = mongoose.model("User", userSchema);
export default User;