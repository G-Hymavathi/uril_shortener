import { Router } from "express";
import { loggedInUser } from "../middlewares/loggedInUser.js";
import { generateShortUrl } from "../controllers/generateShortUrl.js";
import { redirectUrl } from "../controllers/redirectUrl.js";

const shortURLRouter = Router();

shortURLRouter.post("", loggedInUser, generateShortUrl);
shortURLRouter.get("/:shorturl", redirectUrl);

export default shortURLRouter;
