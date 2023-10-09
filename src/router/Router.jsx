import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Services from "../components/Services/Services";
import Service from "../pages/Service/Service";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ServicesCard from "../components/Services/ServicesCard";
import Servic from "../components/Services/Servic";


const router = createBrowserRouter([

    {
        path: '/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/data.json')
            },
            {
                path:'/services/:id',
                element:<Services></Services>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            // {
            //     path:'/service/:id',
            //     element:<ServicesCard></ServicesCard>,
            //     loader:()=>fetch('/data.json')
            // },
            {
                path:'/service/:id',
                element:<Servic></Servic>,
                loader:()=>fetch('/data.json')
            }
        ]
    }
])

export default router;