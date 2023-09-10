import { Schema, model } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "please enter your name"],
    },
    email: {
      type: String,
      required: [true, "please enter your email"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "please enter your password"],
      minLength: [6, "Password must be of 6 characters"],
      select: false,
    },
    firm: {
      type: String,
      required: [true, "Please Enter Your Business/Firm Name"],
    },
    address: {
      type: String,
      required: [true, "Please Enter Your Business Location"],
    },
    subscribed: {
      type: Boolean,
      default: false,
      required: true,
    },
    device_tokens: {
      type: [String],
      default: [],
      select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

// User Methods
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "90d",
  });
};
userSchema.methods.comparePassword = async function (providedPassword) {
  // Include the 'password' field in the result when querying the document
  const user = await this.model("User").findById(this._id).select("+password");
  if (!user) {
    throw new Error("User not found");
  }
  return await bcrypt.compare(providedPassword, user.password);
};

userSchema.methods.getResetToken = async function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  await this.save();
  return resetToken;
};
const User = model("User", userSchema);
export default User;
