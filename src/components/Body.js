import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Error from './Error';
import Shows from './Shows';
import Movies from './Movies';
import Games from './Games';


function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      errorElement: <Error />,
    },
    { path: "/shows", element: <Shows /> },
    { path: "/movies", element: <Movies /> },
    { path: "/games", element: <Games /> },
  ]);

  return (

    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;