import React from 'react'
import { RouterProvider } from 'react-router-dom';
import router from './app.routes.jsx';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';



function App() {  
  const user=useSelector(state=>state.auth.user);
  useEffect(() => {
    console.log("User state changed:", user);
  }, [user]);
  return (
    <RouterProvider router={router}/>
  );
} 


export default App;