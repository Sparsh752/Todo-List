const router=require('express').Router();
const Todo= require("../models/todo");
router.post("/add/todo",(req,res)=>{
    const {todo}=req.body;
    const newTodo=new Todo({todo})
    newTodo.save().then(()=>{
        console.log("Succesfully added todo!");
        res.redirect("/");
    }).catch((e)=>{
        console.log(e);
    })
});
router.get("/delete/todo/:_id",(req,res)=>{
    const id=req.params;
    Todo.deleteOne({_id:id}).then(()=>{
        console.log("Element deleted successfully");
        res.redirect('/');
    }).catch(e=>{
        console.log(e);
    })
})
 

module.exports=router 