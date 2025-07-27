import { Router } from 'express';
import { loggedInUser } from '../middlewares/loggedInUser.js';
import { getUserProfile } from '../controllers/getUserProfile.js';




const userRouter = Router();


userRouter.get("/me", loggedInUser,  getUserProfile)




export default userRouter;