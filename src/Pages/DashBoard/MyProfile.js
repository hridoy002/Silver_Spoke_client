import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link,useNavigate, useParams } from 'react-router-dom';

const MyProfile = () => {
    const {_id} = useParams()
    console.log(_id)
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    return (
        <div>
            <div className=''>
                <div class="avatar online ml-5 ">
                    <div class="w-14 rounded-full">
                        <img src='https://api.lorem.space/image/face?hash=28212' />
                    </div>

                </div>
                <div className='mt-3 ml-5'>
                    <h2 className='text-xl font-semibold uppercase'>{user.displayName}</h2>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl grid place-items-center">

                <div class="card-body  text-lg">

                    <h2 class="card-title"></h2>
                    <h3>Email: {user.email}</h3>
                    <p>Education:{}</p>
                    <p>Location:</p>
                    <p>Phone:</p>
                    <div class="card-actions justify-end">

                    </div>
                </div>
            </div>
            <Link to='/editprofile'><button className='btn btn-ghost'>Edit Your Profile</button></Link>
        </div>
    );
};

export default MyProfile;