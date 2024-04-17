import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../components/Error/Error";
import Deatils from "../Pages/Deatils/Deatils";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Blog from "../components/Blog/Blog";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import UserProfile from "../components/UserProfile/UserProfile";

const router =createBrowserRouter([
  {
    path:"/",
    element:<MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
      {
       path:"/",
       element:<Home></Home>,
       loader:()=> fetch('/FakeData.json')
      },
      {
         path:'FakeData/:id',
         element:<PrivateRoute><Deatils></Deatils>,</PrivateRoute>,
         loader:()=> fetch('/FakeData.json')
         
          
         
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },

      {
        path:"/login",
        element:<Login></Login>
      },

      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/update",
        element:<PrivateRoute>
          <UpdateProfile></UpdateProfile>
        </PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute>
          <UserProfile></UserProfile>
        </PrivateRoute>

      }

     
    ]
  },
  
])
export default router