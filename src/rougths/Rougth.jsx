import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../Component/HomePage/Home";
import NotFoundPage from "../Component/OtherPage/NotFoundPage";
import Main from "../Component/Main/Main";
import Login from "../Component/Page/Login";
import RegistrationPage from "../Component/Page/RegistrationPage";
import BlogsPage from "../Component/OtherPage/Blogs/Blog";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
      errorElement:<NotFoundPage/>,
      children:[
        {
            path:'/',
            element:<Main/>
        },
        {
            path:'/login',
           element:<Login/>
        },
        {
            path:'/registration',
            element:<RegistrationPage/>
        },
        {
            path:'/blog',
            element:<BlogsPage/>
        }
      ]
    },
  ]);

  export default router