import { Router } from "express";
import AccountController from "@controllers/AccountController";
import {
    validDeposit,
    validStore,
    validWithdraw,
    validBalance
} from "@validators/account";

const accountRouters = Router();

accountRouters.post('/create', validStore, AccountController.store);
accountRouters.post('/deposit', validDeposit, AccountController.deposit);
accountRouters.post('/withdraw', validWithdraw, AccountController.withdraw);
accountRouters.get('/balence/:accountId', validBalance, AccountController.balance);

export default accountRouters;