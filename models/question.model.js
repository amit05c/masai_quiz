const mongoose= require("mongoose")

const questionSchema= new mongoose.Schema({
    category: {type: String, require: true},
    difficulty_level: {type: String, require: true},
    question: {type: String, require: true},
    correct_ans:{type: String, require: true},
    options: [String]

})

const QuestionModel= mongoose.model("question",questionSchema)

module.exports={
    QuestionModel
}