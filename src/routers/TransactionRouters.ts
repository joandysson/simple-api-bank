import { Router } from "express";
import TransactionController from "@controllers/TransactionController";
import { validAccountId } from "@validators/account";


const transactionRouters = Router();

transactionRouters.get('/history/:accountId', validAccountId, TransactionController.historyAll);

export default transactionRouters;