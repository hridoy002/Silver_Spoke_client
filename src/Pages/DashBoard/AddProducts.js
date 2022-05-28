import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';

const AddProducts = () => { 
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    
    

    

    

    // image file storage 
    const imgApi = `b2898afe89c6cab65b047e7f8e7453c1`;
    
    //handle form submit
    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        console.log(data)
        

        const url = `https://api.imgbb.com/1/upload?key=${imgApi}`;
        fetch(url,{
            method:"POST",
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;
                const doctor ={
                    name:data.name,
                    description: data.description,
                    price:data.price,
                    quantity: data.quantity,
                    minOrder: data.minOrder,
                    img: img
                }

                // send to database 
                fetch('https://warm-brushlands-82465.herokuapp.com/tools',{
                    method: "POST",
                    headers: {
                        'content-type':'application/json',
                        // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        alert('Successfully Add');
                        reset();
                    }
                    else{
                        alert('Failed to add')
                    }
                }
                    )
            }
            console.log('imgbb',result)
        })

    };
    
    
    return (
        <div>
        <h2 className='text-3xl font-bold uppercase'>Add Products</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input
                    type="text"
                    placeholder="Product Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Product Name is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
            </div>
            {/*********************** Description ********************* */}
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <input
                    type="text"
                    placeholder="Description"
                    className="input input-bordered w-full max-w-xs"
                    {...register("description")}
                />
            </div>
            {/*********************** Price ********************* */}
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input
                    type="text"
                    placeholder="Price"
                    className="input input-bordered w-full max-w-xs"
                    {...register("price", {
                        required: {
                            value: true,
                            message: 'Price is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    
                </label>
            </div>
            {/*********************** Available Quantity ********************* */}
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
                <input
                    type="text"
                    placeholder="Available Quantity"
                    className="input input-bordered w-full max-w-xs"
                    {...register("quantity", {
                        required: {
                            value: true,
                            message: 'Quantity is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                    
                </label>
            </div>

            {/*********************** Minimum Order ********************* */}
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Minimum Order</span>
                </label>
                <input
                    type="text"
                    
                    
                    placeholder="Minimum Order"
                    className="input input-bordered w-full max-w-xs"
                    {...register("minOrder", {
                       
                    })}
                />
                
            </div>


            {/* photo  */}
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input
                    type="file"
                    
                    className="input input-bordered w-full max-w-xs"
                    {...register("image", {
                        required: {
                            value: true,
                            message: 'Photo is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
            </div>

            <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
        </form>
    
    </div>
  
    );
};

export default AddProducts;