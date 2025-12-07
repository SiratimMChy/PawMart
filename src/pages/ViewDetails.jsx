import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

const ViewDetails = () => {
    const [service, setService] = useState([]);
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [quantity, setQuantity] = useState("");
    useEffect(() => {
        fetch(`https://pawmart-beige.vercel.app/listings/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
                if (data?.category === "Pets") {
                    setQuantity(1);
                }
            })
            .catch(err => console.log(err));
    }, [id]);


    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const buyerName = form.buyerName.value;
        const email = form.email.value;
        const productId = form.productId.value;
        const productName = form.productName.value;
        const orderQuantity = parseInt(form.quantity.value);
        const price = parseInt(form.price.value);
        const address = form.address.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const additionalNotes = form.additionalNotes.value;

        const orderData = {
            buyerName,
            email,
            productId,
            productName,
            orderQuantity,
            price,
            address,
            date,
            phone,
            additionalNotes,
        };
        axios.post("https://pawmart-beige.vercel.app/orders", orderData)
            .then(res => {
                console.log(res);
                toast.success("Order placed successfully!");
                form.reset();
            })
            .catch(err => {
                console.log(err);
                toast.error("Failed to place order. Please try again.");
            });
    }






    return (
        <div className="flex justify-center p-10 pb-25">
            <title>Listing Details</title>
            {service ? (
                <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl overflow-hidden ">
                    <img
                        src={service.imageUrl}
                        alt={service.name}
                        className="w-full h-[550px] object-cover"
                    />
                    <div className="p-6">
                        <h1 className="text-2xl font-bold mb-2">{service.name}</h1>
                        <div className="mb-4 text-gray-800 space-y-2">
                            <h5 className="flex gap-2 text-lg">
                                <span className="font-semibold">Category: </span>
                                <span className="text-[15px] mt-1"> {service.category}</span>
                            </h5>
                            <h5 className="text-lg">
                                <span className="font-semibold">Description: </span> <span className="text-[15px]">{service.description}</span>
                            </h5>
                            <h5 className="text-lg">
                                <span className="font-semibold">Owner's Email: </span> <span className="text-[15px]">{service.email}</span>
                            </h5>
                            <h5 className="text-lg">
                                <span className="font-semibold">Price: </span> <span className="text-[15px]">{service.price}</span>
                            </h5>
                            <h5 className="text-lg">
                                <span className="font-semibold">Location: </span> <span className="text-[15px]">{service.location}</span>
                            </h5>
                        </div>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition" onClick={() => document.getElementById('my_modal_3').showModal()}> 🛒 Adopt / Order Now</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-1 top-1">✕</button>
                                </form>

                                <form onSubmit={handleOrder} className="fieldset bg-base-200 border-base-300 rounded-box border p-4 space-y-3">
                                    <div className="text-center mb-4">
                                        <legend className="fieldset-legend font-bold inline-block text-2xl">Order Info</legend>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                        <div className="flex flex-col md:col-span-2">
                                            <label className="label">Buyer Name</label>
                                            <input name='buyerName' readOnly defaultValue={user?.displayName} type="text" className="input" placeholder="Enter buyer's full name" />
                                        </div>

                                        <div className="flex flex-col md:col-span-2">
                                            <label className="label">Email</label>
                                            <input name='email' defaultValue={user?.email} type="email" className="input" placeholder="Email" />
                                        </div>

                                        <div className="flex flex-col">
                                            <label className="label">Product/Listing ID</label>
                                            <input name='productId' type="text" defaultValue={service?._id} className="input" placeholder="Product or listing ID" />
                                        </div>

                                        <div className="flex flex-col">
                                            <label className="label">Product/Listing Name</label>
                                            <input name='productName' readOnly defaultValue={service?.name} type="text" className="input" placeholder="Name of the product" />
                                        </div>

                                        <div className="flex flex-col">
                                            <label className="label">Quantity</label>
                                            <input
                                                type="number"
                                                className="input"
                                                placeholder="Number of items"
                                                min="1"
                                                name="quantity"
                                                value={quantity}
                                                onChange={(e) => {
                                                    const val = parseInt(e.target.value);
                                                    setQuantity(val > 0 ? val : 1);
                                                }}
                                                required
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <label className="label">Price</label>
                                            <input name='price' readOnly defaultValue={service?.price} type="number" className="input" placeholder="Price" step="0.01" min="0" />
                                        </div>

                                        <div className="flex flex-col">
                                            <label className="label">Address</label>
                                            <input required name='address' type="text" className="input" placeholder="Shipping address" />
                                        </div>

                                        <div className="flex flex-col">
                                            <label className="label">Date</label>
                                            <input
                                                required name="date" type="date" className="input"
                                                min={new Date().toISOString().split('T')[0]}
                                                max={new Date().toISOString().split('T')[0]}
                                            />

                                        </div>

                                        <div className="flex flex-col">
                                            <label className="label">Phone</label>
                                            <input required name='phone' type="tel" className="input" placeholder="Phone number" />
                                        </div>

                                        <div className="flex flex-col md:col-span-1">
                                            <label className="label">Additional Notes</label>
                                            <textarea name='additionalNotes' className="textarea textarea-bordered" placeholder="Optional notes or instructions"></textarea>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <button type='submit' className="btn bg-linear-to-r from-blue-600 to-cyan-600 text-white w-40">Order</button>
                                    </div>
                                </form>
                            </div>

                        </dialog>
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
