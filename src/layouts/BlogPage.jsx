import React from 'react';
import { Navigate } from 'react-router-dom';
import Footer from '../components/shared/Footer/Footer';
import Blog from '../components/Blog/Blog';
import NavigationBar from '../components/shared/NavigationBar/NavigationBar';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Spinner } from 'react-bootstrap';

const BlogPage = () => {
    const {loading} = useContext(AuthContext);
    return (
        <>
        {loading ? (
          <div className="position-absolute top-50 start-50 text-primary"><Spinner className="" animation="border" /></div>
        ) : (
          <>
          <NavigationBar />
            <Blog/>
          <Footer />
        </>
        )}
        </>
    );
};

export default BlogPage;