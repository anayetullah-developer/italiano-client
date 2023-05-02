import React from 'react';
import NavigationBar from '../components/shared/NavigationBar/NavigationBar';
import Footer from '../components/shared/Footer/Footer';
import Home from '../components/Home/Home';

const FrontPage = () => {
    return (
        <>
          <NavigationBar/>
            <Home/>
          <Footer/>
        </>
    );
};

export default FrontPage;