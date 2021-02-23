import { Router } from "express";
import TransactionController from "@controllers/TransactionController";
import { validHistoryTransactions } from "@validators/account";


const transactionRouters = Router();

transactionRouters.get('/history/:accountId', validHistoryTransactions, TransactionController.historyAll);

export default transactionRouters;