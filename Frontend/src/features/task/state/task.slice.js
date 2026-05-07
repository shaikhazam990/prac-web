import { createSlice } from "@reduxjs/toolkit";

const taskSlice= createSlice({
    name:'tasks',
    initialState: {
        tasks: [],
        loading: false,
        error: null
    },
    reducers: {
        fetchtaskstart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchtasksucc(state, action) {
            state.tasks = action.payload;
        },
        fetchtaskfail(state, action) {
            state.error = action.payload;
        }
    }
});

export const { 
    fetchtaskstart,
    fetchtasksucc,
    fetchtaskfail
} = taskSlice.actions;

export default taskSlice.reducer;