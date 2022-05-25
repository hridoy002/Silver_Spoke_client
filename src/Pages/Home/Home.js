import React from 'react';
import Banner from './Banner';
import Information from './Information';
import Reviews from './Reviews';
import Stat from './Stat';

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
        </div>
    );
};

export default Home;