import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import Error from './Error';


function Body() {
const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid, email, displayName} = user;
    dispatch(addUser({uid:uid, email:email, displayName:displayName}));
  } else {
    dispatch(removeUser());
  }
});
  })
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Login />
    },
    {
      path:'/browse',
      element:<Browse />
    },
    {
      errorElement:<Error />
    }
  ])

  return (

    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;