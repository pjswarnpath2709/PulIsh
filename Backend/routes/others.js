import express from "express";
import { getStats } from "../controllers/others.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { isSubscribed } from "../middlewares/subscribe.js";
const othersRouter = express.Router();

const appliedMiddleWares = [isAuthenticated, isSubscribed];

othersRouter.route("/others/stats").get(appliedMiddleWares, getStats);

export default othersRouter;
