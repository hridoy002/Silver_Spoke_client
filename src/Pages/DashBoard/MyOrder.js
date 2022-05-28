import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    console.log(user.email)
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://warm-brushlands-82465.herokuapp.com/order?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])
    return (
        <div>
            <div className="overflow-x-auto my-20">
                <table className="table w-full">
                   
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Payment</th>
                            <th>Canceling</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order,index) =><tr>
                                <th>{index+1}</th>
                                <td>{order.product}</td>
                                <td>{order.quantity}</td>
                                <td>{order.address}</td>
                                <td>{order.phone}</td>
                                <td><button className='btn btn-sm btn-success'>Pay</button></td>
                                <td><button className='btn btn-sm btn-error'>Cancel</button></td>
                            </tr> )
                        }
                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;