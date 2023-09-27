import { createUser } from "../controllers/user-controller.js"
import express from "express"

const userRouter = express.Router()

userRouter.post("/form", createUser)

export default userRouter;