const { application } = require("express")
const express= require("express")
const {connection} = require("./config/db")
let cors = require('cors')
const { questionRoutes } = require("./routes/question")
const PORT= process.env.PORT || 8080
const app= express()
app.use(cors())
app.use(express.json())
app.use("/question",questionRoutes)



app.listen(PORT,async()=>{
   try{
    await connection;
    console.log("connected")
   }
   catch(err){
    console.log(err)
   }
})