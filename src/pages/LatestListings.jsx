import React, { useEffect, useState } from 'react';
import { motion as Motion } from "motion/react";
import { Link } from 'react-router';
const LatestListings = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/latest-listings')
            .then(res => res.json())
            .then(data => setListings(data))
            .catch(err => console.log(err));
    }, []);
    return (
        <section className="m-4 pb-25 p-2 ">
            <h1 className="text-3xl font-bold mb-6 text-center">Latest Listings</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10  justify-items-center">
                {listings.map(listing => (
                    <Motion.div
                        key={listing._id}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 0.5 } }}
                        className="card bg-base-100 w-full max-w-lg shadow-sm border border-base-content/10"
                    >
                        <figure>
                            <img
                                src={listing?.imageUrl}
                                alt={listing?.name}
                                loading="lazy"
                                className="h-48 w-full object-cover"
                            />
                        </figure>

                        <div className="card-body mt-2">
                            <h2 className="card-title mb-2">{listing?.name}</h2>
                            <div className="flex justify-between">
                                <h5>
                                    <span className="font-semibold">Category:</span> {listing?.category}
                                </h5>
                                <h5>
                                    <span className="font-semibold">Location:</span> {listing?.location}
                                </h5>
                            </div>

                            <div className="flex justify-between mt-2 items-center">
                                <h2 className="font-bold text-2xl">
                                    {listing?.price ? `${listing.price} ৳` : 'Free for Adoption'}
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