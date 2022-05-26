import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';
import google from '../../Assets/Images/google.png'

const Social = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    if (user) {
        // navigate(from, { replace: true })
        navigate('/')
    }
    if (loading) {
        return <Loading />
    }
    return (
        <div className=''>
            <div className='my-5'>
                <div className="divider w-3/4 m-auto">OR</div>

                <div className='flex justify-center my-5'>
                    <button onClick={() => signInWithGoogle()} className='btn text-dark border rounded-xl  bg-gradient-to-r from-primary w-3/4'><img src={google} style={{ width: '25px' }} alt="" /> Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Social;