
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

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

//importing routes
import user from "./routes/user.js";
import order from "./routes/order.js";
import others from "./routes/others.js";
import errorHandler from "./middlewares/errorHandler.js";

//using routes
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", others);

// error handler middleware
app.use(errorHandler);

export default app;
