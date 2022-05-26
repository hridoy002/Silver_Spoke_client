import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';

const RequireAuth = ({ children }) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation();
    // const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if(loading){
        return <Loading />
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

       
            
        
    

    return children;
};

export default RequireAuth;