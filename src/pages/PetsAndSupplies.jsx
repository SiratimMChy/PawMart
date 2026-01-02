import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion as Motion } from "motion/react"
import { TbCurrencyTaka } from "react-icons/tb";
import { MdOutlineCategory, MdOutlineLocationOn } from "react-icons/md";
const PetsAndSupplies = () => {
    const [services, setServices] = useState([]);
    const [category, setCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        fetch(`https://pawmart-beige.vercel.app/listings?category=${category}`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
            .catch(err => console.log(err));
    }, [category]);

    const Services = services.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        <div className='m-4 pb-25 p-2 lg:px-20'>
            <title>Pets & Supplies</title>
            <div className='flex justify-between gap-4 mt-2 mb-8'>
                <input
                    type="text"
                    placeholder="Search by name..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered"
                />

                <select
                    onChange={(e) => setCategory(e.target.value)}
                    defaultValue="Choose Category"
                    className="select"
                >
                    <option disabled={true}>Choose Category</option>
                    <option value="">All</option>
                    <option value="Pets">Pets</option>
                    <option value="Food">Food</option>
                    <option value="Accessories">Accessories</option>
                    <option value="CareProducts">Care Products</option>
                </select>
            </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-4 mb-8">
                {Services.map(service => (
                    <Motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 2 } }}
                        key={service._id}
                        className="card bg-base-100 w-full max-w-lg shadow-sm border border-base-content/10 flex flex-col h-full"
                    >
                        <figure>
                            <img
                                src={service?.imageUrl}
                                alt={service?.name}
                                loading="lazy"
                                className="w-full h-64 object-cover"
                            />
                        </figure>

                        <div className="card-body p-5 flex-1 flex flex-col justify-between">
                            <div>
                                <h2 className="card-title mb-2 font-bold">{service?.name}</h2>
                                <div className="flex justify-between">
                                    <h5 className="flex items-center gap-1 text-lg font-medium">
                                        <MdOutlineCategory className="w-5 h-5" /> {service?.category}
                                    </h5>
                                    <h5 className="flex items-center gap-1 text-lg font-medium">
                                        <MdOutlineLocationOn className="w-5 h-5" /> {service?.location}
                                    </h5>
                                </div>
                            </div>

                            <div className="flex justify-between mt-4 items-center">
                                <h2 className="flex items-center font-bold text-2xl">
                                    <span>{service?.price}</span>
                                    <TbCurrencyTaka className="w-6 h-6" />
                                </h2>

                                <Link
                                    to={`/details/${service?._id}`}
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

export default PetsAndSupplies;