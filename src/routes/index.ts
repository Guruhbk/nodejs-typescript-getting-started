
import { Router } from "express";
import * as indexctrl from "../controllers/index";

const routes = Router();

routes.get("/", indexctrl.home);
export default routes;