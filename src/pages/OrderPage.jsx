import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

const OrderPage = () => {
    const [service, setService] = useState(null);
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
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

        const orderData = {
            buyerName: form.buyerName.value,
            email: form.email.value,
            productId: form.productId.value,
            productName: form.productName.value,
            orderQuantity: parseInt(form.quantity.value),
            price: parseInt(form.price.value),
            address: form.address.value,
            date: form.date.value,
            phone: form.phone.value,
            additionalNotes: form.additionalNotes.value,
        };

        axios.post("https://pawmart-beige.vercel.app/orders", orderData)
            .then(() => {
                toast.success("Order placed successfully!");
                form.reset();
                navigate(`/details/${id}`);
            })
            .catch(() => {
                toast.error("Failed to place order. Please try again.");
            });
    };

    if (!service) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-base-200">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-base-200 py-8 px-4 lg:py-12 lg:px-8">
            <title>Place Order - PawMart</title>

            <div className="max-w-5xl mx-auto text-base-content">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">
                        Complete Your Order
                    </h1>
                    <p className="opacity-70">
                        Review your order details and provide shipping information
                    </p>
                </div>

                {/* Order Summary */}
                <div className="bg-base-100 rounded-xl shadow-lg border border-base-content/10 p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">
                        Order Summary
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <img
                            src={service.imageUrl}
                            alt={service.name}
                            className="w-32 h-32 object-cover rounded-lg border border-base-content/10"
                        />

                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2">
                                {service.name}
                            </h3>

                            <div className="space-y-1 text-sm opacity-80">
                                <p><span className="font-medium">Category:</span> {service.category}</p>
                                <p><span className="font-medium">Location:</span> {service.location}</p>
                                <p className="text-2xl font-bold text-primary mt-2">
                                    ${service.price}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order Form */}
                <form onSubmit={handleOrder} className="bg-base-100 rounded-xl shadow-lg border border-base-content/10 p-6 lg:p-8">
                    <h2 className="text-2xl font-bold mb-6">
                        Order Information
                    </h2>

                    <div className="space-y-6">
                        {/* Buyer Details */}
                        <div className="border-b border-base-content/10 pb-6">
                            <h3 className="text-lg font-semibold mb-4">Buyer Details</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    name="buyerName"
                                    readOnly
                                    defaultValue={user?.displayName}
                                    className="input input-bordered w-full"
                                />
                                <input
                                    name="email"
                                    readOnly
                                    defaultValue={user?.email}
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="border-b border-base-content/10 pb-6">
                            <h3 className="text-lg font-semibold mb-4">Product Details</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <input name="productId" readOnly defaultValue={service._id} className="input input-bordered w-full" />
                                <input name="productName" readOnly defaultValue={service.name} className="input input-bordered w-full" />
                                <input
                                    type="number"
                                    name="quantity"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                                    className="input input-bordered w-full"
                                    required
                                />
                                <input name="price" readOnly defaultValue={service.price} className="input input-bordered w-full" />
                            </div>
                        </div>

                        {/* Shipping Info */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <input required name="address" className="input input-bordered w-full md:col-span-2" placeholder="Shipping address" />
                                <input required name="date" type="date" className="input input-bordered w-full" />
                                <input required name="phone" className="input input-bordered w-full" placeholder="Contact number" />
                                <textarea
                                    name="additionalNotes"
                                    rows="4"
                                    className="textarea textarea-bordered w-full md:col-span-2 resize-none"
                                    placeholder="Additional notes (optional)"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-6 border-t border-base-content/10">
                        <button type="button" onClick={() => navigate(-1)} className="btn btn-warning">
                            Cancel Order
                        </button>
                        <button type="submit"  className="btn bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition" >
                            Confirm & Place Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderPage;
