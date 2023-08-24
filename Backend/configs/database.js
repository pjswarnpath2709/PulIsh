import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      "\x1b[35m",
      "👉👉👉 connected with :",
      connection.connection.host
    );
  } catch (err) {
    process.exit(1);
  }
};
