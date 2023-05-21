import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Component/HomePage/Home";
import NotFoundPage from "../Component/OtherPage/NotFoundPage";
import Main from "../Component/Main/Main";
import Login from "../Component/Page/Login";
import RegistrationPage from "../Component/Page/RegistrationPage";
import BlogsPage from "../Component/OtherPage/Blogs/Blog";
import AllToy from "../Component/AllToy/AllToy";
import Toys from "../Component/AllToy/Toys";
import ToyDetails from "../Component/AllToy/toyDetails";
import AddToy from "../Component/OtherPage/AddToy";
import PrivateRouter from "./PrivatRouter";
import MyToys from "../Component/myToys/MyToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registrar",
        element: <RegistrationPage />,
      },
      {
        path: "/blog",
        element: <BlogsPage />,
      },
      {
        path: "/allToys",
        element: <AllToy />,
      
      },
      {
        path:"/details/:id",
        element:<PrivateRouter><ToyDetails/></PrivateRouter>,
        loader:({params})=>fetch(`https://toy-marketplace-server-mdsarowarhang-gmailcom.vercel.app/Toy/${params.id}`)
      },
    {
      path:'/addToy',
      element:<AddToy/>
    },
    {
      path:'myToys',
      element:<PrivateRouter><MyToys/></PrivateRouter>
    }
    ],
  },
]);

export default router;
