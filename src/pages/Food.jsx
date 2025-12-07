import { useEffect } from 'react';
import { useState } from 'react';
import { motion as Motion } from "motion/react";
import { Link } from 'react-router';
const Food = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/listings?category=Food')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err));
    }, []);

   return (
           <div className='m-4 pb-25 p-2 lg:px-50'>
            <title>Food Category</title>
               <h2 className='text-2xl font-bold mb-4 text-center'>Pet Food</h2>
   
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 border border-base-content/10 justify-items-center'>
                   {services.map(Service => (
                       <Motion.div
                           key={Service._id}
                           initial={{ scale: 0 }}
                           animate={{ scale: 1, transition: { duration: 0.5 } }}
                           className="card bg-base-100 w-full max-w-lg shadow-sm rounded-xl"
                       >
                           <figure className="overflow-hidden rounded-t-xl">
                               <img
                                   src={Service?.imageUrl}
                                   alt={Service?.name}
                                   className="w-full h-60 object-cover"
                                   loading="lazy"
                               />
                           </figure>
   
                           <div className="card-body mt-2">
                               <h2 className="card-title mb-2">{Service?.name}</h2>
   
                               <div className='flex justify-between mb-2'>
                                   <h5>
                                       <span className="font-semibold">Category:</span> {Service?.category}
                                   </h5>
                                   <h5>
                                       <span className="font-semibold">Location:</span> {Service?.location}
                                   </h5>
                               </div>
   
                               <div className="flex justify-between items-center">
                                   <h2 className="font-bold text-2xl">{Service?.price} ৳</h2>
                                   <Link
                                       to={`/details/${Service?._id}`}
                                       className="btn bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-lg"
                                   >
                                       See Details
                                   </Link>
                               </div>
                           </div>
                       </Motion.div>
                   ))}
               </div>
           </div>
       );
};

export default Food;