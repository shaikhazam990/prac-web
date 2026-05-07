import { useEffect,useState } from "react";
import { useTask } from "../hooks/useTask.js";
import {Link, useNavigate } from "react-router";
import { useParams } from "react-router-dom";

const TaskDetailsPage=()=>{
    const {handleGetTaskById,handleUpdateTask}= useTask();
    const [task,setTask]= useState(null);
    const {id}= useParams();
    const navigate= useNavigate();
    
    useEffect(()=>{ 
        const fetchTask= async()=>{
            const fetchedTask= await handleGetTaskById(id);
            setTask(fetchedTask);
        };
        fetchTask();
    },[id]);

    const handleChange= (e)=>{
        const {name,value}= e.target;
        setTask((prevTask)=>({
            ...prevTask,
            [name]: value
        }));
    };

    const handleSubmit= async(e)=>{
        e.preventDefault();
        await handleUpdateTask(id,task);
        navigate('/');
    };

    if(!task){
        return <div>Loading...</div>;
    }
    
    return(
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
            <form onSubmit={handleSubmit} className="max-w-md">
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input 
                        type="text"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea 
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Status</label>
                    <select
                        name="status"
                        value={task.status}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                    >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update Task</button>
            </form>
        </div>
    );
};

export default TaskDetailsPage;


