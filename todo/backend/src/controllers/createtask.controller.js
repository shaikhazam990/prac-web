import taskmodel from "../models/task.model.js";

export const createTask = async (req,res)=>{
    try{
        const {title, description} =  req.body;
        if(!title){
            return res.status(400).json({
                message:"Title is required",
                success:false,

            })

        }
        const newTask = await new taskmodel({
            title,
            description,

        })
        await newTask.save();
        res.status(201).json({
            message:"Task created successfully",
            success:true,
            data:newTask,
        })

    }

    catch(error){
        console.error("Error creating task:", error);
        res.status(500).json({
            message:"Internal server error",
            success:false,
        })
    }

    
}

export const getAllTasks = async (req,res)=>{
    try{
        const tasks = await taskmodel.find();
        res.status(200).json({
            message:"Tasks retrieved succesfully",
            success:true,
            data:tasks,
        })
    }
    catch(error){
        console.error("Error retrieving tasks:", error);
        res.status(500).json({
            message:"Internal server error",
            success:false,
        })
    }
}

export const getTaskById = async (req,res)=>{
    try{
        const {id} = req.params;
        const task = await taskmodel.findById(id);
        if(!task){
            return res.status(404).json({
                message:"Task not found",
                success:false,
            })
        }
        res.status(200).json({
            message:"Task retrieved successfully",
            success:true,
            data:task,
        })
    }
    catch(error){
        console.error("Error retrieving task:", error);
        res.status(500).json({
            message:"Internal server error",
            success:false,
        })
    }
}

export const updateTask = async (req,res)=>{
    try{
        const {id} = req.params;
        const {title,description, completed} = req.body;
        const task = await taskmodel.findById(id);
        if(!task){
            return res.status(404).json({
                message:"Task not found",
                success:false,
            })
        }
        task.title = title || task.title;
        task.description = description || task.description;
        task.completed = completed !== undefined ? completed : task.completed;

        await task.save();
        res.status(200).json({
            message:"Task updated successfully",
            success:true,
            data:task,
        })
    }
    catch(error){
        console.error("Error updating task:", error);
        res.status(500).json({
            message:"Internal server error",
            success:false,      
            })
        }
    }