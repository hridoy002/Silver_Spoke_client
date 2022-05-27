import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import reviewBanner from '../../Assets/reviewBanner.jpg'
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const handleReview = event => {
        event.preventDefault();
        const name = user.displayName;
        const review = event.target.review.value;
        const rating = event.target.rating.value;
        
        const reviewRate = {
            name: name,
            body: review,
            ratings: rating
        }
        console.log(reviewRate)
        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewRate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.success){
                alert.success("Your review post")
            }
        })
    }
    return (
        <div>
            <div >
                <h1 className='text-3xl font-bold'>Give Your Valuable Review About Our Services</h1>
                <div className='flex flex-col lg:flex-col mt-10'>
                    <form onSubmit={handleReview} action="" className='s'>

                        <input type="text" name='review' placeholder="Write Here" class="input input-bordered w-full max-w-xs mb-3" />
                       
                        <br />
                        <input id='rate' name='rating' type="text" placeholder="Ratings ?/5" class="input input-bordered w-full max-w-xs mb-3" />
                        <br />
                        <input type="submit" value="Submit"  class="btn btn-primary text-white input-bordered w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;