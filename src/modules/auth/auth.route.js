import { Router } from "express";
import * as controller from "./auth.controller.js"
import validate from "../../common/middleware/validate.middleware.js"
import RegisterDto from "./dto/register.dto.js";

const authRouter = Router()

authRouter.post('/register', validate(RegisterDto), controller.registerHandler)

export default authRouter