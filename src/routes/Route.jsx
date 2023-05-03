import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import FrontPage from '../layouts/FrontPage';
import RecipePage from '../layouts/RecipePage';
import LoginPage from '../layouts/LoginPage';
import Registration from '../components/Login/Registration';
import Login from '../components/Login/Login';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>,
        children: [
            {
                path: "/",
                element: <FrontPage/>
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
        path: "/recipe",
        element: <RecipePage/>
    },

])

export default router;