import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import BuyModal from './BuyModal';


const Purchage = () => {
    const { toolId } = useParams();
    const [tool, setTool] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${toolId}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }
        , []);

    const [buy,setBuy] = useState(null);

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
                    <p>Min. Order: {tool.minOrder}</p>
                    <p>Unit Price: {tool.price} ৳</p>
                    
                    <div className="card-actions">
                        <label onClick={()=> setBuy(tool)} for="my-modal-6" className="btn btn-primary">Buy Now</label>
                    </div>
                </div>
            </div>
            {buy && <BuyModal buy={buy} setBuy={setBuy}></BuyModal>}
        </div>
    );
};

export default Purchage;