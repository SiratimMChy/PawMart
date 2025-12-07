import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyListings = () => {
    const [myListings, setMyListsings] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://pawmart-beige.vercel.app/my-listings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyListsings(data);
            })
            .catch(err => console.log(err));
    }, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://pawmart-beige.vercel.app/delete/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount == 1) {
                            const remaining = myListings.filter(listing => listing._id !== id);
                            setMyListsings(remaining);
                        }

                    })
                    .catch(err => {
                        console.log(err)
                    });
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

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