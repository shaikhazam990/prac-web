import mongoose from "mongoose";

import task from "../models/task.model.js";

export const createTask = async (req,res)=>{
    try{
        const {title, description, status} = req.body;
        const newtask = new task({
            title,
            description,
            status,
        })
        await newtask.save();
        res.status(201).json({
            message:"Task created successfully",
            task: newtask
        });
        
    }
    catch(error){
        console.error("Error creating task:", error);
        res.status(500).json({
            message:"internal server error"   
        })
    }
}

export const getalltasks= async (req,res)=>{
    try{
        const tasks= await task.find();
        res.status(200).json({
            message:"Tasks fetched successfully",
            tasks
        });
    }
    catch(error){
        console.error("Error fetching tasks:", error);
        res.status(500).json({
            message:"internal server error"
        })
    }
}

export const gettaskbyid= async (req,res)=>{
    try{
        const {id} = req.params;
        const taskbyid = await task.findById(id);
        if(!taskbyid){
            return res.status(404).json({
                message:"task not found"
            });
        }
        res.status(200).json({
            message:"task fetched successfully",
            task: taskbyid
        });
    }
    catch(error){
        console.error("error fetching task:", error);
        res.status(500).json({
            message:"internal server error"
        })
    }
}

export default{
    createTask,
    getalltasks,
    gettaskbyid
}