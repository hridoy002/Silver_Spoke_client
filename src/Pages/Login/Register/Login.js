import React, { useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../../shared/Loading'
import useToken from '../../../Hooks/useToken';


const Login = () => {

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);


    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    // const [token] = useToken(user || googleUser);
    useEffect(() => {
        if (user) {
            // navigate('/');
            navigate(from, { replace: true });
            
        }
    }, [ user,from, navigate])

    if (loading || googleLoading) {
        return <Loading />
    }

    // error 
    let errorMessage;
    if (error || googleError) {
        errorMessage = <p>{error?.message}</p>
    }

    // login form handle 
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='h-full flex justify-center items-center'>
            <div className="my-24 card w-96 bg-base-100 shadow-xl flex ">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>


                    {/********** log in form  ***************/}
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            {/*********************** email field ********************* */}
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        {/*********************** Password field ********************* */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {errorMessage}
                        <input className='btn w-full max-w-xs text-white bg-gradient-to-r from-primary' type="submit" value="Login" />
                    </form>

                    <p><small>Are you new In Silver Spoke? <Link to="/register" className='text-primary'> Create New Account</Link></small></p>
                </div>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline text-white border rounded-xl  bg-gradient-to-r from-primary">Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;