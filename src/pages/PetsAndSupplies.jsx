import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion as Motion } from "motion/react"
const PetsAndSupplies = () => {
    const [services, setServices] = useState([]);
    const [category, setCategory] = useState('');
    useEffect(() => {
        fetch(`http://localhost:3000/listings?category=${category}`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
            .catch(err => console.log(err));
    }, [category]);
    return (

        <div className='m-4 pb-25 p-2 lg:px-50'>
            <title>Pets & Supplies</title>
            <select onChange={(e)=> setCategory(e.target.value)} defaultValue="Choose Category" className="select mt-2 mb-8">
                <option disabled={true}>Choose Category</option>
                <option value="">All</option>
                <option value="Pets">Pets</option>
                <option value="Food">Food</option>
                <option value="Accessories">Accessories</option>
                <option value="Care Products">Care Products</option>
            </select>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 justify-items-center'>
                {
                    services.map(Service =>
                        <Motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, transition: { duration: 2 } }}
                            key={Service._id}
                            className="card bg-base-100 w-full max-w-lg shadow-sm"
                        >
                            <figure>
                                <img
                                    src={Service?.imageUrl}
                                    alt={Service?.name}
                                    loading="lazy"
                                />
                            </figure>

                            <div className="card-body mt-2">
                                <h2 className="card-title mb-2">{Service?.name}</h2>

                                {/* --- Added Category + Location --- */}
                                <div className='flex justify-between'>
                                    <h5>
                                        <span className="font-semibold">Category:</span> {Service?.category}
                                    </h5>
                                    <h5>
                                        <span className="font-semibold">Location:</span> {Service?.location}
                                    </h5>
                                </div>

                                {/* ----------------------------------- */}

                                <div className="flex justify-between">

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
                    )
                }

            </div>

        </div>
    );
};

export default PetsAndSupplies;