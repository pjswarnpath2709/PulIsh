import { config } from "dotenv";
config({ path: "./configs/config.env" });

//  import middlewares
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";

// use of middlewares
const app = express();
app.use(cookieParser());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

//importing routes
import user from "./routes/user.js";
import errorHandler from "./middlewares/errorHandler.js";

//using routes
app.use("/api/v1", user);

// error handler middleware
app.use(errorHandler);

export default app;
