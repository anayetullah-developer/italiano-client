import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import FrontPage from '../layouts/FrontPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <FrontPage/>
    }
])

export default router;