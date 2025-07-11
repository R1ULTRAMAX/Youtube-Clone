import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path: "./env"
})

connectDB()
.then(()=>{
    app.listen(port.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${port.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed!", err);
    
})