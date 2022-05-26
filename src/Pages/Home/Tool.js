import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id,name, price,img } = tool;

    const navigate = useNavigate();

    const handlePurchase = id =>{
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p>{price}</p>
                <div className="card-actions justify-start">
                    <button onClick={()=>handlePurchase(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;