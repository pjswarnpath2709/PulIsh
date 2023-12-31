import { config } from "dotenv";
config({ path: "./config/config.env" });

import app from "./app.js";
import { connectDB } from "./configs/database.js";
import { readAndInitializeFirebase } from "./configs/firebase.js";

connectDB();
readAndInitializeFirebase();

app.listen(process.env.PORT, () => {
  console.log(
    "\x1b[36m",
    "👍👍👍",
    `Server Started at port : ${process.env.PORT}`
  );
});
