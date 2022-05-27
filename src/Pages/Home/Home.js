import React from 'react';
import Banner from './Banner';
import Information from './Information';
import Reviews from './Reviews';
import Stat from './Stat';
import extraBanner from '../../Assets/extraBanner.jpg'
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='pt-[100px] pb-[150px] bg-gray-100 hidden lg:block'>

            </div>
            <Information />
            <Tools />
            <Stat />
            <Reviews />
            <div style={{backgroundImage: `url(${extraBanner})`}} className='bg-cover lg:bg-center' >
                <div className='grid place-items-center align-middle p-20'>
                <h2 className='text-5xl font-bold text-accent   lg:text-white lg:h-[400px]'>Lets Keep This Riding Happy</h2>
                
                
                </div>
            </div>
        </div>
    );
};

export default Home;