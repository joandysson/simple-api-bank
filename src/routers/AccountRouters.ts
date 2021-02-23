import { Router } from "express";
import AccountController from "@controllers/AccountController";
import {
    validAccountId,
    validDepositOrWithdraw,
    validStore,
} from "@validators/account";

const accountRouters = Router();

accountRouters.post('/create', validStore, AccountController.store);
accountRouters.put('/deposit', validDepositOrWithdraw, AccountController.deposit);
accountRouters.put('/withdraw', validDepositOrWithdraw, AccountController.withdraw);
accountRouters.put('/block', validAccountId, AccountController.block);
accountRouters.put('/ative', validAccountId, AccountController.ative);
accountRouters.get('/balance/:accountId', validAccountId, AccountController.balance);

export default accountRouters;