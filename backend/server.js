import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

dotenv.config()

import connectToMongoDB from "./db/connectToMongoDB.js"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

const app = express()
const PORT = process.env.PORT || 8000


app.use(express.json()) // untuk Parsing JSON, Agar bisa menerima payload JSON Request (req.body)
app.use(cookieParser())

app.get("/", (req,res)=> res.send("dari url :" + req.query.pesan))

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.listen(PORT, ()=> {
  connectToMongoDB()
  console.log(`Server running on Port ${PORT}`)
})