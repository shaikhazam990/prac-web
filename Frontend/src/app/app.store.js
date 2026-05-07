import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/task/state/task.slice';

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
});
