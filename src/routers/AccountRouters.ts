import { Router } from "express";
import AccountController from "@controllers/AccountController";
import {
    validDeposit,
    validStore,
    validWithdraw,
    validBalance,
    validBlock,
    validHistoryTransactions
} from "@validators/account";

const accountRouters = Router();

accountRouters.post('/create', validStore, AccountController.store);
accountRouters.put('/deposit', validDeposit, AccountController.deposit);
accountRouters.put('/withdraw', validWithdraw, AccountController.withdraw);
accountRouters.put('/block', validBlock, AccountController.block);
accountRouters.get('/balance/:accountId', validBalance, AccountController.balance);

export default accountRouters;