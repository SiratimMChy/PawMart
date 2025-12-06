import React from 'react';
import { useNavigate } from 'react-router';
import ErrorImg from '../assets/error-404.png'


const ErrorPage = () => {
     const navigate = useNavigate();
    return (
         <>
        <div className='flex flex-col items-center justify-center text-center pt-8 pb-25'>
          <img src={ErrorImg} alt="" className='w-80 max-w-full mb-8'/> 
          <h1 className='font-bold text-4xl'>Oops, page not found!</h1>
          <p className='text-[15px] mt-5 text-gray-700'>The page you are looking for is not available.</p>
          <button onClick={()=>navigate("/")} className="rounded text-white w-[150px] flex  justify-center items-center gap-[10px] py-3 pb-4 px-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white mt-8 font-semibold">Go Back!</button>
        </div>
        </>
    );
};

export default ErrorPage;