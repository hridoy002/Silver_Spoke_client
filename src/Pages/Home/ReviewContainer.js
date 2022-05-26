import React from 'react';

const ReviewContainer = ({ review }) => {
    const { name, body } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="avatar">
                    <div className="w-10 rounded-full mr-3">
                        <img  src="https://api.lorem.space/image/face?hash=92310" />
                        
                    </div>
                    <h2 className="card-title">{name}</h2>
                </div>
                
                <p>{body}</p>

            </div>
        </div>
    );
};

export default ReviewContainer;