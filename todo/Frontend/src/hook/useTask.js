import {fetchTasksStart,fetchTasksSuccess,fetchTasksFailure,addTaskStart,addTaskSuccess,addTaskFailure,updateTaskStart,updateTaskSuccess,updateTaskFailure,deleteTaskStart,deleteTaskSuccess,deleteTaskFailure } from "../state/task.slice.js"
import { useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import TaskApi from "../service/task.api.js"

const useTask = () => {
    const dispatch=useDispatch();
    const {tasks,loading,error}=useSelector(state=>state.task);
    
    const fetchTasks = useCallback(async () => {
        dispatch(fetchTasksStart());
        try {
            const tasks = await TaskApi.getTasks();
            dispatch(fetchTasksSuccess(tasks));
        } catch (error) {
            dispatch(fetchTasksFailure(error.message));
        }
    }, [dispatch]);
    const addTask=async(task)=>{
        dispatch(addTaskStart());
        try {
            const newTask=await TaskApi.createTask(task);
            dispatch(addTaskSuccess(newTask));
        }
        catch (error) {
            dispatch(addTaskFailure(error.message));
        }
    }
    const updateTask=async(id,task)=>{
        dispatch(updateTaskStart());
        try {
            const updatedTask=await TaskApi.updateTask(id,task);
            dispatch(updateTaskSuccess(updatedTask));
        }
        catch (error) {
            dispatch(updateTaskFailure(error.message));
        }
    }
    const deleteTask=async(id)=>{
        dispatch(deleteTaskStart());
        try {
            await TaskApi.deleteTask(id);
            dispatch(deleteTaskSuccess(id));
        }
        catch (error) {
            dispatch(deleteTaskFailure(error.message));
        }
    }
    useEffect(() => {
        fetchTasks();
    }, [fetchTasks])
    return {tasks,loading,error,addTask,updateTask,deleteTask};
}

export default useTask;