import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';

import auth from '../../firebase.init';
const EditProfile = () => {
    const [user] = useAuthState(auth);
    const {_id} = useParams();
    const handleForm = event => {
        event.preventDefault();
        const address = event.target.address.value; 
        const location = event.target.location.value; 
        const education = event.target.education.value; 
        const phone = event.target.phone.value; 
        const linkedin = event.target.linkedin.value; 

        const edit={
            address: address,
            location: location,
            education: education,
            phone: phone,
            linkedin: linkedin
        }
        fetch(`https://warm-brushlands-82465.herokuapp.com/profile?email=${user.email}`,{
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(edit)
        })
        .then(res => res.json())
        .then(data =>{
            alert('Profile Updated');
            event.target.reset();
        })
    }
    return (
        <div className='grid place-items-center  my-20'>
            <h1 className='text-left'>Edit Your Profile</h1>
            <h3></h3>
            <div className='w-2/4'>
            <form onSubmit={handleForm} action="" className='mt-10'>
                <input type="text" placeholder="Name" className="input input-bordered input-primary w-full  mb-3" />
                    <br />
                <input type="text" name='address' placeholder="Address" className="input input-bordered input-primary w-full  mb-3" />
                <br />
                <input type="text" placeholder="Location" name='location' className="input input-bordered input-primary w-full  mb-3" />
                <br />
                <input type="text" placeholder="Education" name='education' className="input input-bordered input-primary w-full  mb-3" />
                <br />
                <input type="text" placeholder="Phone" name='phone' className="input input-bordered input-primary w-full  mb-3" />
                <br />
                <input type="text" placeholder="Likedin Link" name='linkedin' className="input input-bordered input-primary w-full   mb-3" />
                <br />
                <input type="submit" value="Update" className="input input-bordered btn-primary  w-full btn  mb-3" />

            </form>
            </div>
       
        </div>
    );
};

export default EditProfile;