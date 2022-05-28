import React, { useEffect, useState } from 'react';
import ReviewContainer from './ReviewContainer';

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    useEffect( ()=>{
        
        fetch('https://warm-brushlands-82465.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }
        ,[])
    return (
        <div className='grid place-items-center my-12'>
            <h3 className='text-3xl font-bold text-primary border-b-4 border-black'>“Our Clients”</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {reviews.map(review => <ReviewContainer key={review.id} review={review} />)}
            </div>
        </div>
    );
};

export default Reviews;