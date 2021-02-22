import { Router } from "express";
import AccountController from "@controllers/AccountController";
import {
    validDeposit,
    validStore
} from "@validators/account";

const accountRouters = Router();

accountRouters.post('/create', validStore, AccountController.store);
accountRouters.post('/deposit', validDeposit, AccountController.deposit);

export default accountRouters;