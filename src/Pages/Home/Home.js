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
                <div className='grid place-items-center align-middle p-20 lg:h-[400px]'>
                <h2 style={{backgroundColor:"#0006"}} className='text-5xl font-bold  p-5  text-white '>Lets Keep This Riding Happy</h2>
                
                
                </div>
            </div>
        </div>
    );
};

export default Home;