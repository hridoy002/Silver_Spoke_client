import React from 'react';

const ReviewContainer = ({ review }) => {
    const { name, body } = review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <div class="avatar">
                    <div class="w-10 rounded-full mr-3">
                        <img  src="https://api.lorem.space/image/face?hash=92310" />
                        
                    </div>
                    <h2 class="card-title">{name}</h2>
                </div>
                
                <p>{body}</p>

            </div>
        </div>
    );
};

export default ReviewContainer;