import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Purchage = () => {
    const { toolId } = useParams();
    const [tool, setTool] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${toolId}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }
        , []);

        const { register, handleSubmit } = useForm();
        const onSubmit = data => console.log(data);
    return (
        <div className='my-20 grid grid-cols-2'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={tool.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{tool.name}</h2>
                    <p>Specication: {tool.description}</p>
                    <p>Available: {tool.quantity}</p>
                    <p>Min. Order: {tool.min}</p>
                    <p>Unit Price: {tool.price} ৳</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    
                        <input type="number" {...register("quantity", { min: 18, max: 99 })} />
                        <input type="submit" />
                    </form>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchage;