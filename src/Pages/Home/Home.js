import React from 'react';
import Banner from './Banner';
import Information from './Information';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='pt-[100px] pb-[150px] bg-gray-100 hidden lg:block'>

            </div>
            <Information />
            <Tools />
        </div>
    );
};

export default Home;