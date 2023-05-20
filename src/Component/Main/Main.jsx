import React from 'react';
import Slider from '../HomePage/Slider';
import CatagoryToy from '../CatagoryToy/CatagoryToy';
import ReviewPage from '../OtherPage/ReviewPage';

const Main = () => {
    return (
        <div>
            <Slider/>
            <CatagoryToy/>
            <ReviewPage/>
        </div>
    );
};

export default Main;