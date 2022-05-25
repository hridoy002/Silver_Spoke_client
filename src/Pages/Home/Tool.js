import React from 'react';

const Tool = ({ tool }) => {
    const { name, price,img } = tool;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p>{price}</p>
                <div class="card-actions justify-start">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;