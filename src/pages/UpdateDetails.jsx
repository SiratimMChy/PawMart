import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useParams } from 'react-router';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateDetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [listingDetails, setListingDetails] = useState();
    const [category, setCategory] = useState(listingDetails?.category);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://pawmart-beige.vercel.app/listings/${id}`)
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
        axios.put(`https://pawmart-beige.vercel.app/update/${id}`, formData)
            .then(res => {
                console.log(res.data);
                navigate('/MyListing');
                Swal.fire({
                    title: "Successfully Updated",
                    icon: "success"
                });
                form.reset();
            })
            .catch(err => {
                console.log(err)
            });
    }
      return (
        <div className="max-w-xl mx-auto bg-base-100 shadow-lg rounded-2xl p-8 mt-10 mb-10 border border-base-content/10">
            <h2 className="text-3xl font-bold mb-6 text-center">
                Update Listing
            </h2>

            <form onSubmit={handleUpdate} className="space-y-3">

                {/* Name */}
                <div>
                    <label className="label">Product/Pet Name</label>
                    <input
                        defaultValue={listingDetails?.name}
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
                        value={category}
                        name="category"
                        onChange={(e) => setCategory(e.target.value)}
                        className="select select-bordered w-full"
                    >
                        <option value="Pets">Pets</option>
                        <option value="Food">Food</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Care Products">Care Products</option>
                    </select>
                </div>

                {/* Price */}
                <div>
                    <label className="label">Price</label>
                    <input
                        defaultValue={listingDetails?.price}
                        type="number"
                        name="price"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="label">Location</label>
                    <input
                        defaultValue={listingDetails?.location}
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
                        defaultValue={listingDetails?.description}
                        name="description"
                        className="textarea textarea-bordered w-full"
                        rows="2"
                        placeholder="Write details..."
                        required
                    ></textarea>
                </div>

                {/* Image URL */}
                <div>
                    <label className="label">Image URL</label>
                    <input
                        defaultValue={listingDetails?.imageUrl}
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
                        defaultValue={listingDetails?.date}
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
                        type="email"
                        name="email"
                        readOnly
                        className="input input-bordered w-full bg-base-200"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="btn bg-linear-to-r from-blue-600 to-cyan-600 w-full text-white"
                >
                    Update Listing
                </button>
            </form>
        </div>
    );
};
export default UpdateDetails;




