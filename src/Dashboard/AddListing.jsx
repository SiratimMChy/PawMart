import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddListing = () => {
    const { user } = useContext(AuthContext);
    const [price, setPrice] = useState(0);

    const categoryChange = (e) => {
        const category = e.target.value;
        if (category === "Pets") setPrice(0);
        else setPrice("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const fromData = {
            name: form.name.value,
            category: form.category.value,
            price: price === "" ? 0 : parseInt(price),
            location: form.location.value,
            description: form.description.value,
            imageUrl: form.imageUrl.value,
            date: form.date.value,
            email: form.email.value,
        };

        axios.post("https://pawmart-beige.vercel.app/listings", fromData)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Successfully Added Listing",
                        icon: "success"
                    });
                    form.reset();
                }
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                });
            });
    };

    return (
        <div className="max-w-xl mx-auto bg-base-100 shadow-lg rounded-2xl p-8 mt-12 border border-base-content/10 mb-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Create New Listing</h2>

            <form onSubmit={handleSubmit} className="space-y-3">

                {/* Name */}
                <div>
                    <label className="label">Product / Pet Name</label>
                    <input
                        type="text"
                        name="name"
                        className="input input-bordered w-full"
                        placeholder="Enter name"
                        required
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="label">Category</label>
                    <select
                        name="category"
                        onChange={categoryChange}
                        className="select select-bordered w-full"
                    >
                        <option value="Pets">Pets</option>
                        <option value="Food">Food</option>
                        <option value="Accessories">Accessories</option>
                        <option value="CareProducts">CareProducts</option>
                    </select>
                </div>

                {/* Price */}
                <div>
                    <label className="label">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="label">Location</label>
                    <input
                        type="text"
                        name="location"
                        className="input input-bordered w-full"
                        placeholder="Enter location"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="label">Description</label>
                    <textarea
                        name="description"
                        className="textarea textarea-bordered w-full"
                        rows="2"
                        placeholder="Write details..."
                        required
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="label">Image URL</label>
                    <input
                        type="url"
                        name="imageUrl"
                        className="input input-bordered w-full"
                        placeholder="https://example.com/image.jpg"
                        required
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="label">Pick Up Date</label>
                    <input
                        type="date"
                        name="date"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="label">Email</label>
                    <input
                        value={user?.email}
                        readOnly
                        type="email"
                        name="email"
                        className="input input-bordered w-full bg-base-200"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn bg-linear-to-r from-blue-600 to-cyan-600 w-full text-white"
                >
                    Submit Listing
                </button>
            </form>
        </div>
    );
};

export default AddListing;
