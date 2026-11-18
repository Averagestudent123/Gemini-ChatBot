const express = require('express');
const cors = require('cors');
require("dotenv").config()
const {GoogleGenerativeAI} = require('@google/generative-ai');


const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.KEY)
const model = genAI.getGenerativeModel({model: "gemini-3.5-flash-lite"})

app.post('/ask', async (req,res) => {
    
    let {question} = req.body

    let data = await model.generateContent(question)
    let finalData = data.response.text()
    


    res.send({
        _status:true,
        _message:"Content Found..",
        finalData
    })
})
 
// app.get('/', (req,res)=>{
//     res.send()
// })

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})