import {useState } from "react";
import { Link } from "react-router-dom";
import useTask from "../hook/useTask.js";

const Home = () => {
    const {tasks,loading,error,addTask,deleteTask}=useTask();
    const [newTaskTitle,setNewTaskTitle]=useState("");



    const handleAddTask=()=>{
        if(newTaskTitle.trim()){
            addTask({title:newTaskTitle});
            setNewTaskTitle("");
        }
    }
    return (
        <div>
            <h1>Home</h1>
            <input type="text" value={newTaskTitle} onChange={(e)=>setNewTaskTitle(e.target.value)} placeholder="New Task"/>
            <button onClick={handleAddTask}>Add Task</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {tasks.map(task=>(
                    <li key={task.id}>
                        <Link to={`/tasks/${task.id}`}>{task.title}</Link>
                        <button onClick={()=>deleteTask(task.id)}>Delete</button>
                    </li>    
                ))}     
            </ul>
        </div>
    );
};

export default Home;

