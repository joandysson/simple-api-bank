import { Router } from "express";
import TransactionController from "@controllers/TransactionController";


const peopleRouters = Router();

peopleRouters.post('/create', TransactionController.index);

export default peopleRouters;