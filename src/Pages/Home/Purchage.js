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
        <div className='grid place-items-center my-20'>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={tool.img} className='w-[400px]' alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{tool.name}</h2>
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