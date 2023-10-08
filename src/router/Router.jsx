import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Services from "../components/Services/Services";
import Service from "../pages/Service/Service";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([

    {
        path: '/',
        element:<Root></Root>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/data.json')
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;