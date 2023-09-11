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

console.log(process.env.FRONTEND_URL);

const corsOptions = {
  origin: [`${process.env.FRONTEND_URL}`],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

//importing routes
import user from "./routes/user.js";
import order from "./routes/order.js";
import customer from "./routes/customer.js";
import others from "./routes/others.js";
import errorHandler from "./middlewares/errorHandler.js";

//using routes
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", customer);
app.use("/api/v1", others);

// error handler middleware
app.use(errorHandler);

export default app;
