import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';

const ViewDetails = () => {
    const [service, setService] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://pawmart-beige.vercel.app/listings/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleOrderClick = () => {
        navigate(`/orderpage/${id}`);
    };

    return (
        <div className="flex justify-center p-4 lg:p-10 pb-25 bg-base-200">
            <title>Listing Details</title>

            {service ? (
                <div className="lg:max-w-4xl w-4xl lg:w-full bg-base-100 shadow-lg rounded-2xl overflow-hidden">
                    <img
                        src={service.imageUrl}
                        alt={service.name}
                        className="w-full h-[550px] object-cover"
                    />

                    <div className="p-2 lg:p-6 text-base-content">
                        <h1 className="text-2xl font-bold mb-2">
                            {service.name}
                        </h1>

                        <div className="mb-4 space-y-2">
                            <h5 className="flex gap-2 text-[16px] lg:text-lg">
                                <span className="font-semibold">Category: </span>
                                <span className="text-[15px] mt-1">
                                    {service.category}
                                </span>
                            </h5>

                            <h5 className="text-[16px] lg:text-lg">
                                <span className="font-semibold">Description: </span>
                                <span className="text-[15px]">
                                    {service.description}
                                </span>
                            </h5>

                            <h5 className="text-[16px] lg:text-lg">
                                <span className="font-semibold">Owner's Email: </span>
                                <span className="text-[15px]">
                                    {service.email}
                                </span>
                            </h5>

                            <h5 className="text-[16px] lg:text-lg">
                                <span className="font-semibold">Price: </span>
                                <span className="text-[15px]">
                                    {service.price}
                                </span>
                            </h5>

                            <h5 className="text-[16px] lg:text-lg">
                                <span className="font-semibold">Location: </span>
                                <span className="text-[15px]">
                                    {service.location}
                                </span>
                            </h5>
                        </div>

                        <button 
                            className="btn bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition" 
                            onClick={handleOrderClick}
                        >
                            🛒 Adopt / Order Now
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center min-h-screen">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            )}
        </div>
    );
};

export default ViewDetails;