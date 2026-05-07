import { useEffect } from "react";
import { useTask } from "../hooks/useTask";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";


const HomePage=()=>{
    const {handleFetchTask,handleDeleteTask}= useTask();
    const tasks= useSelector((state)=> state.tasks.tasks);
    const navigate= useNavigate();
    
    useEffect(()=>{
        handleFetchTask();
    },[]);

    const handleEdit= (id)=>{
        navigate(`/tasks/${id}`);
    };

    return(
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Task List</h1>
            <Link to="/tasks/create" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">Create Task</Link>
            <ul>
                {tasks.map((task)=>(
                    <li key={task._id} className="border p-4 mb-2 flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-semibold">{task.title}</h2>
                            <p>{task.description}</p>
                            <p>Status: {task.status}</p>
                        </div>
                        <div>
                            <button onClick={()=> handleEdit(task._id)} className="bg-green-500 text-white px-3 py-1 rounded mr-2">Edit</button>

                            <button onClick={()=> handleDeleteTask(task._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
