import { Router } from "express";
import transactionController from "@controllers/TransactionController";


const peopleRouters = Router();

peopleRouters.post('/create', transactionController.index);

export default peopleRouters;