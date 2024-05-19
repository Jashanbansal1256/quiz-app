import Questions from "../models/questionSchema.js"
import Results from "../models/resultSchema.js"
import questions,{answers} from "../database/data.js"


export async function getQuestions(req,res){
   try{
     const q =await Questions.find();
     res.json(q)
   }catch(error){
    res.json({error})
   }
}


// insert all questions

export async function insertQuestions(req,res){
    try {
        Questions.insertMany({ questions, answers})
            .then(function(err, data){

            res.json({ msg: "Data Saved Successfully...!"})
        })
    }catch (error) {
        res.json({ error })
    }
}

export async function dropQuestions(req,res){
    res.json("api delete request")
}
// get all result
export async function getResult(req,res){
    res.json(" result api get request")
}
// post all result
export async function storeResult(req,res){
    res.json(" result api post request")
}
// delete all result
export async function dropResult(req,res){
    res.json(" result api delete request")
}