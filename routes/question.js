const express = require("express");
const {QuestionModel}= require("../models/question.model")

const {Router}= express
const questionRoutes= Router()


questionRoutes.get("/",async(req,res)=>{
      console.log(req.query)
      let {number_of_questions,category,difficulty_level}= req.query
      let output= await QuestionModel.find({category,difficulty_level})
      let ans= output.splice(0,Number(number_of_questions))
    //   console.log(ans)
      res.send({data: ans})

})



questionRoutes.post("/add",async(req,res)=>{
    let {category,difficulty_level,question,correct_ans,options}= req.body
    console.log(req.body)
    let newQuestion= new QuestionModel({category,difficulty_level,question,question,correct_ans,options})
        await newQuestion.save()
        res.send("done")

})

module.exports={
    questionRoutes
}
