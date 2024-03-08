import express from "express"
import { sendMessages, getMessages } from "../controllers/message.controllers.js"
import protectRoute from "../middleware/protectRoute.js"

const routes = express.Router()

routes.get("/:id", protectRoute, getMessages)
routes.post("/send/:id", protectRoute, sendMessages)

export default routes