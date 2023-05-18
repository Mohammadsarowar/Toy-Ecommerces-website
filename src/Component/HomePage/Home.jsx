import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-[calc(100vh-137px)]'>
              <Outlet/>  
            </div>
            
            <Footer/>
        </div>
    );
};

export default Home;