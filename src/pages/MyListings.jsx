import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import axios from 'axios';

const MyListings = () => {
    const [myListings, setMyListsings] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:3000/my-listings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyListsings(data);
            })
            .catch(err => console.log(err));
    }, [user?.email]);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/delete/${id}`)
            .then(res => {
                console.log(res.data);
                const remaining = myListings.filter(listing => listing._id !== id);
                setMyListsings(remaining);
            })
            .catch(err => console.log(err));
    }
    return (

        <div className="px-4 md:px-8 lg:px-10 mt-8 mb-10">
            <title>My Listings</title>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name & Category</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {myListings?.map(listing => (
                            <tr key={listing._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-16 w-16">
                                                <img
                                                    src={listing?.imageUrl}
                                                    alt={listing?.name || "Listing Image"}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="font-bold">{listing?.name}</div>
                                            <div className="text-sm opacity-70">
                                                {listing?.category}
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className="text-sm opacity-70">{listing?.price} ৳</div>
                                </td>

                                <td>
                                    <div className="text-sm opacity-70 w-64">
                                        {listing?.description}
                                    </div>
                                </td>

                                <td>
                                    <div className="flex gap-2">
                                        <button onClick={() => handleDelete(listing?._id)} className="btn bg-red-600 btn-sm w-20 text-white font-semibold">Delete</button>
                                        <Link to={`/UpdateDetails/${listing._id}`}>
                                        <button className="btn bg-blue-600 btn-sm w-20 text-white font-semi">Edit</button></Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default MyListings;