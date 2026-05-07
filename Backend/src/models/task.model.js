import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    status:{
        type:String
    }, 
 },{ timestamps: true });

 const Task = mongoose.model("Task", taskSchema);

 export default Task;