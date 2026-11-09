const express = require('express');
const cors = require('cors');
require("dotenv").config()
const {GoogleGenerativeAI} = require('@google/generative-ai');


const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.KEY)
const model = genAI.getGenerativeModel({model:"gemini-3.8-flash"})

app.get('/', (req,res)=>{
    res.send("Hello!")
})
 
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})