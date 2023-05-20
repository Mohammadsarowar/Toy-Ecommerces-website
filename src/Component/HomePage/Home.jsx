import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ReviewPage from '../OtherPage/ReviewPage';


const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-[calc(100vh-137px)]'>
              <Outlet/> 
              <ReviewPage/> 
            </div>
            
            <Footer/>
        </div>
    );
};

export default Home;