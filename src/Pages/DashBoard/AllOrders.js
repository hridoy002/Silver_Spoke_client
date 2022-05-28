import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [allorder, setAllorder] = useState([]);
    useEffect(() => {
        fetch('https://warm-brushlands-82465.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllorder(data))
    }, [])
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Payment Status</th>
                            <th>Order Stage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allorder.map((e,index) => <tr>
                            <th>{index+1}</th>
                            <td>{e.product}</td>
                            <td>{e.quantity}</td>
                            <td>Unpaid</td>
                            <td><button className='btn btn-sm '>Shipment</button></td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;