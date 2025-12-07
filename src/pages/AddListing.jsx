import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';

const AddListing = () => {

    const { user } = useContext(AuthContext);
    const [price, setPrice] = useState(0);
    const categoryChange = (e) => {
        const category = e.target.value;
        if (category === "Pets") {
            setPrice(0);
        } else {
            setPrice("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const priceValue = price === "" ? 0 : parseInt(price);
        const location = form.location.value;
        const description = form.description.value;
        const imageUrl = form.imageUrl.value;
        const date = form.date.value;
        const email = form.email.value;

        const fromData = {
            name,
            category,
            price: priceValue,
            location,
            description,
            imageUrl,
            date,
            email,
        };

        console.log(fromData);

        axios.post("http://localhost:3000/listings", fromData)
            .then(res => {
                console.log(res);
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Successfully Adding Item on listing",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                }
            })
            .catch(err => {
                console.log(err);

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });

            });
    };



    return (
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl pt-6 py-10 px-8 mt-10 h-full mb-10 ">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                Create New Listing
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Product/Pet Name</label>
                    <input
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
                        name="category"
                        onChange={categoryChange}
                        className="mt-1 w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                    >
                        <option value="Pets">Pets</option>
                        <option value="Food">Food</option>
                        <option value="Accessories">Accessories</option>
                        <option value="CareProducts">CareProducts</option>
                    </select>
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="mt-1 w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
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
                    Submit Listing
                </button>
            </form>
        </div>
    );
};

export default AddListing;