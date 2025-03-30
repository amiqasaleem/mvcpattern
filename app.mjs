import express from "express";
const app = express();
const port = 3000;
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"



//body parser
app.use(express.json());

//connect to database
connectDB();

app.get('/', (req, res)=>{
    res.send("Hello Worlddddddddd")
})

//load the router

app.use('/api', productRoutes)

app.listen(3000, ()=>{
    console.log(`Amiqa Listening on port ${port}`);  
})

