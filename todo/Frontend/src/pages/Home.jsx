import { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import useTask from "../hook/useTask.js";

const Home = () => {
    const {tasks,loading,error,addTask,deleteTask}=useTask();
    const [newTaskTitle,setNewTaskTitle]=useState("");
    const navigate=useNavigate();
    const user=useSelector(state=>state.auth.user);
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);
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

