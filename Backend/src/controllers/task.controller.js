import mongoose from "mongoose";

import task from "../models/task.model.js";

export const createTask = async (req,res)=>{
    try{
        const {title, description, status} = req.body;
        const newtask = new task({
            title,
            description,
            status,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        await newtask.save();
        res.status(201).json(newtask);
    }
    catch(error){
        console.error("Error creating task:");
        res.status(500).json({
            message:"Internal Server Error"   
        })
    }
}

export const getalltasks= async (req,res)=>{
    try{
        const tasks= await task.find();
        res.status(200).json(tasks);
    }
    catch(error){
        console.error("error fetching task:");
        res.status(500).json({
            message:"internal server error"
        })
    }
}

export default{
    createTask,
    getalltasks
}