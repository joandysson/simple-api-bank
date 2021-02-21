import { Router } from "express";
import peopleController from "@controllers/PeapleController";


const peopleRouters = Router();

peopleRouters.post('/create', peopleController.index);

export default peopleRouters;