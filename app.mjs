import express from "express";
const app = express();
const port = 3000;
import connectDB from "./config/db.js";

//body parser
app.use(express.json());

//connect to database
connectDB();
app.get('/', (req, res)=>{
    res.send("Hello Worlddddddddd")
})

app.listen(3000, ()=>{
    console.log(`Amiqa Listening on port ${port}`);  
})

