import {createBrowserRouter} from 'react-router-dom';
import HomePage from '../features/task/pages/HomePage.jsx';
import TaskPage from '../features/task/pages/TaskPage.jsx';
import TaskDetailsPage from '../features/task/pages/TaskDetailsPage.jsx';
import CreatePage from '../features/task/pages/createPage.jsx';

const router= createBrowserRouter([
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
        element:<TaskDetailsPage/>
    },
    {
        path:'/tasks/create',
        element:<CreatePage/>
    }
])

export default router;
