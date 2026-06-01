import { createSlice } from '@reduxjs/toolkit';

const taskSlice= createSlice({
    name:'task',
    initialState:{
        tasks:[],
        loading:false,
        error:null
    },
    reducers:{
        fetchTasksStart:(state)=>{
            state.loading=true;
            state.error=null;
        },
        fetchTasksSuccess:(state,action)=>{
            state.loading=false;
            state.tasks=action.payload;
        },
        fetchTasksFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        addTaskStart:(state)=>{
            state.loading=true;
            state.error=null;
        },
        addTaskSuccess:(state,action)=>{
            state.loading=false;
            state.tasks.push(action.payload);
        },
        addTaskFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
         updateTaskStart:(state)=>{
            state.loading=true;
            state.error=null;
        },
        updateTaskSuccess:(state,action)=>{
            state.loading=false;
            const index=state.tasks.findIndex(task=>task.id===action.payload.id);
            if(index!==-1){
                state.tasks[index]=action.payload;
            }
        },
        updateTaskFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
         deleteTaskStart:(state)=>{
            state.loading=true;
            state.error=null;
        },
        deleteTaskSuccess:(state,action)=>{
            state.loading=false;
            state.tasks=state.tasks.filter(task=>task.id!==action.payload);
        },
        deleteTaskFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
    }
})

export const {
    fetchTasksStart,
    fetchTasksSuccess,
    fetchTasksFailure,
    addTaskStart,
    addTaskSuccess,
    addTaskFailure,
    updateTaskStart,
    updateTaskSuccess,
    updateTaskFailure,
    deleteTaskStart,
    deleteTaskSuccess,
    deleteTaskFailure
}=taskSlice.actions;

export default taskSlice.reducer;