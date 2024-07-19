import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import contactRouter from "./routes/contact.js"


dotenv.config()

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB connected"))


const app = express();


app.use(contactRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`)
})

