import { Router } from "express";
import { SignUp } from "../controllers/auth.js";

const route = Router();

route.post("/signup", SignUp )

export default route;