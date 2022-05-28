import React, { useEffect, useState } from 'react';
import Loading from '../shared/Loading';
import AdminData from './AdminData';

const Admin = () => {
    const [users,setUsers] = useState([]);
    useEffect(() =>{
        fetch('https://warm-brushlands-82465.herokuapp.com/users',)
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
    },[])
    
    return (
        <div>
            <h2 className='text-2xl font-bold mt-10 uppercase'>Admin Data (all user)</h2>
            <div className="overflow-x-auto my-10">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Index</th>
        <th>Email</th>
        <th>Rule</th>
        
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index) => <AdminData key={index} index={index} user={user} />)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Admin;