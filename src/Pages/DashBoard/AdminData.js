import React, { useEffect } from 'react';
import Loading from '../shared/Loading';

const AdminData = ({user,index}) => {
    const {email,rule} = user;
    const makeAdmin =() =>{
            fetch(`https://warm-brushlands-82465.herokuapp.com/user/admin/${email}`,{
            method: "PUT",
            headers:{
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {alert('Admin Created')
                    
    })
        
    }
    return (
            <tr>
                <th>{index+1}</th>
                <td>{email}</td>
                <td>{rule !== "admin" && <button onClick={makeAdmin} className='btn btn-sm btn-primary'>Make Admin</button>}</td>
              
            </tr>

    );
};

export default AdminData;