import { Router } from "express";
import userController from "@controllers/TransactionController";


const userRouters = Router();

userRouters.post('/create', userController.index);

export default userRouters;