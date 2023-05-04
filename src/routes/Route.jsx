import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import FrontPage from '../layouts/FrontPage';
import RecipePage from '../layouts/RecipePage';
import LoginPage from '../layouts/LoginPage';
import Registration from '../components/Login/Registration';
import Login from '../components/Login/Login';
import Error from '../components/Error/Error';
import BlogPage from '../layouts/BlogPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>,
        children: [
            {
                path: "/",
                element: <FrontPage/>,
                loader: () => fetch('http://localhost:5000/chefs')
            },

            {
                path: "/login",
                element: <Login/>
            },

            {
                path: "/registration",
                element: <Registration/>
            }
    ]
       
    },

    {
        path: "/recipe/:id",
        element: <RecipePage/>,
        loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
    },

    {
        path: "/blog",
        element: <BlogPage/>
    },


    {
        path: "/*",
        element: <Error/>,
    },

])

export default router;