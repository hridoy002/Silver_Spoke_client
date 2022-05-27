import React from 'react';
import img from '../../Assets/Images/banner/1.jpg'

const Information = () => {
    return (
        <div className='p-5 lg:p-16 mt-20 lg:mt-[-150px]   w-3/4 bg-accent m-auto mb-10'>
            <div className='mb-10'>
                <div className='' >
                    <h2 className='text-3xl text-primary tracking-wide font-bold'><span className='text-white'>WELCOME</span> SILVER SPOKE</h2>
                </div>
                <div style={{width:'200px',color:'white' }} className='divider'></div> 
                <div style={{width:'150px', marginTop:'-10px'} } className='divider'></div> 
                <div style={{width:'100px', marginTop:'-10px'}} className='divider'></div> 
                <p className='text-xl text-white'>Complete Bicycle, Bicycle Spare Parts & Accessories Manufacture</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className=''>
                    <img className='rounded-lg' src={img} alt="" />
                </div>
                <div className=' px-5'>
                    <h4 className='text-primary text-xl'>WE AIM TO PROVIDE YOU THE BEST QUALITY PRODUCTS</h4>
                    <p className='text-lg mt-10 text-white'>Established in 1994, SOVEREIGN EXPORTS has made a name for itself in the list of top suppliers of bicycle spare parts, complete bicycle, motorcycle parts, fasteners & many more in India. The main supplier company of Sovereign export is located in Ludhiana, Punjab, and is one of the leading sellers of listed products in India.They are amongst the reputed Indian organizations, extremely engaged in giving bicycle Parts and accessories of, motorcycles parts, complete bicycles, etc and good quality range of Parts and accessories of bicycles, motorcycles, etc</p>
                </div>
            </div>
        </div>

    )

};

export default Information;