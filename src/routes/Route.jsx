import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import FrontPage from '../layouts/FrontPage';
import RecipePage from '../layouts/RecipePage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <FrontPage/>
    },

    {
        path: "/recipe",
        element: <RecipePage/>
    }
])

export default router;