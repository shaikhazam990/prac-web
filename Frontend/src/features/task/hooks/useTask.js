import {fetchtaskstart,fetchtasksucc,fetchtaskfail} from '../state/task.slice.js';
import {getAllTasks,createTask,getTaskById,updateTask,deleteTask} from '../services/task.api.js';
import { useDispatch } from 'react-redux';

export const useTask=()=>{
    const dispatch= useDispatch();

    const handleFetchTask= async()=>{
        dispatch(fetchtaskstart());
        try{
            const response= await getAllTasks();
            dispatch(fetchtasksucc(response.data.tasks));
        }
        catch(error){
            dispatch(fetchtaskfail(error.message));
        }
        };

        const handleCreateTask= async(taskData)=>{
            try{
                await createTask(taskData);
                handleFetchTask();
            }
            catch(error){
                console.error("Error creating task:", error);
            }
        };

        const handleGetTaskById= async(id)=>{
            try{
                const response= await getTaskById(id);
                return response.data.task;
            }
            catch(error){
                console.error("Error fetching task by id:", error);
            }
        };
        
        const handleUpdateTask= async(id,updatedData)=>{
            try{
                await updateTask(id,updatedData);
                handleFetchTask();
            }
            catch(error){
                console.error("Error updating task:", error);
            }
        };

        const handleDeleteTask= async(id)=>{

            try{
                await deleteTask(id);
                handleFetchTask();
            }
            catch(error){
                console.error("Error deleting task:", error);
            }
        };

        return {
            handleFetchTask,
            handleCreateTask,
            handleGetTaskById,
            handleUpdateTask,
            handleDeleteTask
        };
};

















  