import React from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading';
import useToken from '../../../Hooks/useToken';

const Register = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    // update name 
    const [updateProfile] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    
    const [token] = useToken(user || googleUser);
    if (user || googleUser) {
        navigate('/')
    }
    
    
    // error 
   // error 
   let errorMessage;
   if (error || googleError) {
       errorMessage = <p>{error?.message || googleError?.message}</p>
   }

   if(loading || googleLoading){
    return <Loading />
}
    // handle form submit 
    const onSubmit = async data => {

        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        
        console.log(data)
        
    };
    return (
        <div className='h-full flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl flex">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>


                    {/********** log in form  ***************/}
                    <form onSubmit={handleSubmit(onSubmit)}>


                        {/****************** input user name  ******************/}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

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
                        <input className='btn w-full max-w-xs text-white bg-gradient-to-r from-primary' type="submit" value="Sign Up" />
                    </form>


                    <p><small> Already have an account? <Link to="/login" className='text-secondary'> Please Login</Link></small></p>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline text-white border rounded-xl  bg-gradient-to-r from-primary">Continue with Google</button>
                </div>
                
            </div >
            
        </div >
    );
};

export default Register;