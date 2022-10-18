const mongoose=require('mongoose');
const todo_schema=new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
})

module.exports=new mongoose.model("Todo",todo_schema);