import express from "express";
import routes from "./routes/index.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.get("/",(req,res)=>{
    res.json({msg:"route working..."})
})

app.use(routes)

app.listen(PORT,()=>{
    console.log(`app listening on port: ${PORT}`)
})

