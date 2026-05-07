import {useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTask } from "../hooks/useTask";
import { Link } from "react-router-dom";


const CreatePage=()=>{
    const {handleCreateTask}= useTask();
    const navigate= useNavigate();
    const [title, setTitle]= useState('');
    const [description, setDescription]= useState('');
    const [status, setStatus]= useState('pending');

    
    const handleSubmit= (e)=>{

        e.preventDefault();
        handleCreateTask({title,description,status});
        navigate('/');
    };
    
    return(
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create Task</h1>
            <form onSubmit={handleSubmit} className="max-w-md">
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input 
                        type="text"
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea

                        value={description}
                        onChange={(e)=> setDescription(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Status</label>
                    <select 
                        value={status}
                        onChange={(e)=> setStatus(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                    >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create Task</button>
            </form>
        </div>
    );
};

export default CreatePage;