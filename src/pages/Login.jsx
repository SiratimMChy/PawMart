import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router';
import auth from '../firebase/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { useLocation } from 'react-router';
import { toast } from 'react-toastify';
const Login = () => {

    const { setUser, handleSignupWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.state ? location.state : '/';
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                toast.success('Login successful!');
                navigate(path);
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.message);
            });
    }


    const SignInWithGoogle = () => {
        handleSignupWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success('Google login successful!');
                navigate(path);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const hanldeforget = (e) => {
        e.preventDefault();
        const emailInput = e.target.form.email.value;
        if (!emailInput) {
            toast.error('Please enter your email first');
            return;
        }
        navigate(`/forgetpassword/${emailInput}`);
    }


    return (
         <div className='flex items-center justify-center min-h-screen px-4 py-10'>
            <title>Login</title>
            <form onSubmit={handleSubmit} className="fieldset bg-linear-to-r from-blue-50 to-blue-100 border border-base-300 rounded-box w-full max-w-sm p-4 sm:p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-black text-center">Login</h2>
                
                <fieldset className="fieldset mb-4">
                    <label className="label text-black text-sm font-semibold">Email</label>
                    <input name='email' type="email" className="input input-bordered w-full text-sm md:text-base" placeholder="Enter Your Email" required />
                </fieldset>

                <fieldset className="fieldset mb-4">
                    <label className="label text-black text-sm font-semibold">Password</label>
                    <input name='password' type="password" className="input input-bordered w-full text-sm md:text-base" placeholder="Enter Your Password" required />
                </fieldset>

                <div className="mb-4">
                    <button type="button" onClick={hanldeforget} className="link link-hover text-sm text-blue-600">
                        Forgot password?
                    </button>
                </div>

                <button type="submit" className="btn bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold w-full mb-4">
                    Login
                </button>

                <button type="button" onClick={SignInWithGoogle} className="btn btn-outline w-full mb-4 flex items-center justify-center gap-2">
                    <FcGoogle className="text-xl md:text-2xl" />
                </button>

                <div className="flex gap-1 text-sm justify-center">
                    <span className='text-black'>Don't have an account?</span>
                    <Link className='text-blue-600 link link-hover' to="/signup">Register</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;