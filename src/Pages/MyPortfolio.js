import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='grid place-items-center my-20'>
            <h2 className='text-4xl '>Portfolio</h2>
            <div class="card  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Name: Md Hridoy Ahmmed</h2>
                    <p>Email: hridoyalhasan2@gmail.com</p>
                    <p>Education: BSC in CSE at Northern University Bangladesh</p>
                    <p>My Skill: HTML,CSS,BOOTSTRAP,TAILWIND,JS,REACT,NODE,EXPRESS,MONGODB</p>
                    <p>My Work: <br /> 1. <a className='underline' href="https://mr-mechanic-e1b7e.web.app/">Mr Mechanic</a><br />
                    2. <a className='underline' href=" https://daily-baazar.netlify.app/ ">Daily Baazar</a>  <br />
                    3. <a href="https://the-book-planet.web.app/" className='underline text-blue-900'>The Book Planet</a> </p>
                </div>
            </div>
            
        </div>
    );
};

export default MyPortfolio;