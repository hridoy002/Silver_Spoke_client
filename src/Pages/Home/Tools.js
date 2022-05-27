import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools,setTools] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/tools`)
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
    return (
        <div className='my-32'>
            <h2 className='text-primary text-center text-4xl font-bold'><span className='text-black'>Silver Spoke</span> <span style={{borderBottom:'solid 3px orangered'}}>Features</span>  Categories</h2>
            
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-[80%] mx-auto mt-10'>
                {tools.map(tool => <Tool key={tool._id} tool={tool} />).slice(-3)}
            </div>
        </div>
    );
};

export default Tools;