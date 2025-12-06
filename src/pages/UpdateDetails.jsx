import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useParams } from 'react-router';
import axios from 'axios';
import { useNavigate } from 'react-router';

const UpdateDetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [listingDetails, setListingDetails] = useState();
    const [category, setCategory] = useState(listingDetails?.category);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:3000/listings/${id}`)
            .then(res => {
                setListingDetails(res.data);
                setCategory(res.data.category);
            })
            .catch(err => console.log(err));
    }, [id]);
    console.log(listingDetails);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const priceValue = parseInt(form.price.value);
        const location = form.location.value;
        const description = form.description.value;
        const imageUrl = form.imageUrl.value;
        const date = form.date.value;
        const email = form.email.value;

        const formData = {
            name,
            category,
            price: priceValue,
            location,
            description,
            imageUrl,
            date,
            email,
            createAt: listingDetails?.createAt,
        };
        axios.put(`http://localhost:3000/update/${id}`, formData)
            .then(res => {
                console.log(res.data);
                navigate('/MyListing');
            })
            .catch(err => {
                console.log(err)
            });
    }
    return (
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl pt-6 py-10 px-8 mt-10 h-full mb-10 ">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                Update Listing
            </h2>

            <form onSubmit={handleUpdate} className="space-y-3">

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Product/Pet Name</label>
                    <input
                        defaultValue={listingDetails?.name}
                        type="text"
                        name="name"
                        className="mt-1 w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                        placeholder="Enter name"
                        required
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                        value={category}
                        name="category"
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                    >
                        <option value="Pets">Pets</option>
                        <option value="Food">Food</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Care Products">Care Products</option>
                    </select>
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        defaultValue={listingDetails?.price}
                        type="number"
                        name="price"
                        className="mt-1 w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        defaultValue={listingDetails?.location}
                        type="text"
                        name="location"
                        className="mt-1 w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                        placeholder="Enter location"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        defaultValue={listingDetails?.description}
                        name="description"
                        className="mt-1 w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                        rows="2"
                        placeholder="Write details..."
                        required
                    ></textarea>
                </div>

                {/* Image URL */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Image URL</label>
                    <input
                        defaultValue={listingDetails?.imageUrl}
                        type="url"
                        name="imageUrl"
                        className="mt-1 w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                        placeholder="https://example.com/image.jpg"
                        required
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Pick Up Date</label>
                    <input
                        defaultValue={listingDetails?.date}
                        type="date"
                        name="date"
                        className="mt-1 w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        value={user?.email}
                        type="email"
                        name="email"
                        readOnly
                        className="mt-1 w-full p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Update Listing
                </button>
            </form>
        </div>
    );
};

export default UpdateDetails;




