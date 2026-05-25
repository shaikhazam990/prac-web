import TaskModel from "../models/task.model.js";

export const createTask = async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        const newTask = new TaskModel({ title, description, completed });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTasks = async ( req,res)=>{
    try{
        const tasks = await TaskModel.find();
        res.status(200).json(tasks);

    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
};

export const getTaskById = async (req,res)=>{
    try{
        const task = await TaskModel.findById(req.params.id);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ 
            message: error.message 
        });
    }
};

export const updateTask = async (req,res)=>{
    try{
        const updatedTask= await TaskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ 
            message: error.message 
        });
    }
};

export const deleteTask= async(req,res)=>{
    try{
        await TaskModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message:"Task deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

export default {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
}
