import React, { useEffect, useState } from 'react';
import { motion as Motion } from "motion/react";
import { Link } from 'react-router';
import { MdOutlineCategory, MdOutlineLocationOn } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

const LatestListings = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetch('https://pawmart-beige.vercel.app/latest-listings')
            .then(res => res.json())
            .then(data => setListings(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <section className="mt-4 pb-25 px-5 lg:px-25">
            <h1 className="text-3xl font-bold mb-6 text-center">Latest Listings</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-4 mb-8">
                {listings.map(listing => (
                    <Motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 2 } }}
                        key={listing._id}
                        className="card bg-base-100 w-full max-w-lg shadow-sm border border-base-content/10 flex flex-col h-full"
                    >
                        <figure>
                            <img
                                src={listing?.imageUrl}
                                alt={listing?.name}
                                loading="lazy"
                                className="w-full h-64 object-cover"
                            />
                        </figure>

                        <div className="card-body p-5 flex-1 flex flex-col justify-between">
                            <div>
                                <h2 className="card-title mb-2 font-bold">{listing?.name}</h2>
                                <div className="flex justify-between">
                                    <h5 className="flex items-center gap-1 text-lg font-medium">
                                        <span className="font-bold"><MdOutlineCategory className="font-bold" /></span> {listing?.category}
                                    </h5>
                                    <h5 className="flex items-center gap-1 text-lg font-medium">
                                        <span className="font-bold"><MdOutlineLocationOn className="font-bold" /> </span>{listing?.location}
                                    </h5>
                                </div>
                            </div>

                            <div className="flex justify-between mt-4 items-center">
                                <h2 className="flex items-center font-bold text-2xl">
                                    <span>{listing?.price}</span>
                                    <TbCurrencyTaka className="w-6 h-6" />
                                </h2>

                                <Link
                                    to={`/details/${listing?._id}`}
                                    className="btn bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-lg"
                                >
                                    See Details
                                </Link>
                            </div>
                        </div>
                    </Motion.div>
                ))}
            </div>
        </section>
    );
};

export default LatestListings;
