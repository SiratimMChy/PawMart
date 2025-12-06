import jsPDF from 'jspdf';
import React, { useEffect } from 'react';
import { useState } from 'react';
import autoTable from 'jspdf-autotable';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
            })
            .catch(err => {
                console.log(err)

            });

    }, [user?.email]);

    const downloadReport = () => {
        const pdf = new jsPDF();

        pdf.text("PawMart", 14, 16);

        const tableColData = [
            "#", "Product/Listing Name", "Buyer Name", "Price",
            "Quantity", "Address", "Date", "Phone"
        ];

        const tableRowData = myOrders.map((order, index) => [
            index + 1,
            order.productName,
            order.buyerName,
            order.price,
            order.orderQuantity,
            order.address,
            order.date,
            order.phone
        ]);

        autoTable(pdf, {
            head: [tableColData],
            body: tableRowData,
            startY: 20,
        });

        pdf.save("PawMart_Order_Report.pdf");
    };



    return (
        <div className='px-10 mt-8 mb-12'>
            {myOrders ? (
                <div>
                    <h2 className='text-center font-bold text-3xl mb-4'>My Orders List</h2>
                    <div className="overflow-x-auto">
                        <table className="table table-xs">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product/Listing Name</th>
                                    <th>Buyer Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Address</th>
                                    <th>Date</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myOrders.map((order, index) =>
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{order?.productName}</td>
                                            <td>{order?.buyerName}</td>
                                            <td>{order?.price} ৳</td>
                                            <td>{order?.orderQuantity}</td>
                                            <td>{order?.address}</td>
                                            <td>{order?.date}</td>
                                            <td>{order?.phone}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <div className='text-center items-center justify-center mt-5'>
                            <button
                                onClick={downloadReport}
                                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Download Report
                            </button>
                        </div>

                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center min-h-screen">
                    <h2>No Data Found</h2>
                </div>
            )}
        </div>
    );
};

export default MyOrders;




