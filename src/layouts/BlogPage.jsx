import React from 'react';
import { Navigate } from 'react-router-dom';
import Footer from '../components/shared/Footer/Footer';
import Blog from '../components/Blog/Blog';
import NavigationBar from '../components/shared/NavigationBar/NavigationBar';

const BlogPage = () => {
    return (
        <div>
            <NavigationBar/>
                <Blog/>
            <Footer/>
        </div>
    );
};

export default BlogPage;