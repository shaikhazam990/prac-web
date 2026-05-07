import {creataBrowserRouter} from 'react-router-dom';

export const router= creataBrowserRouter([
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/tasks',
        element:<TaskPage/>
    },
    {
        path:'/tasks/:id',
        element:<TaskDetailPage/>
    }
])

