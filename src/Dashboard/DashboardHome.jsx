import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Package, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [myListings, setMyListings] = useState([]);
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch listings
        const listingsRes = await fetch(`https://pawmart-beige.vercel.app/my-listings?email=${user?.email}`);
        const listingsData = await listingsRes.json();
        setMyListings(listingsData);

        // Fetch orders
        const ordersRes = await fetch(`https://pawmart-beige.vercel.app/orders?email=${user?.email}`);
        const ordersData = await ordersRes.json();
        setMyOrders(ordersData);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [user?.email]);

  // Calculate statistics
  const totalListings = myListings.length;
  const totalOrders = myOrders.length;
  const totalRevenue = myOrders.reduce((sum, order) => sum + (parseFloat(order.price) * parseInt(order.orderQuantity)), 0);
  const avgOrderValue = totalOrders > 0 ? (totalRevenue / totalOrders).toFixed(2) : 0;

  // Category distribution for Pie Chart
  const categoryData = myListings.reduce((acc, listing) => {
    const category = listing.category || 'Other';
    const existing = acc.find(item => item.name === category);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: category, value: 1 });
    }
    return acc;
  }, []);

  // Monthly orders for Line Chart last 6 months
  const monthlyOrdersData = myOrders.reduce((acc, order) => {
    const date = new Date(order.date);
    const monthYear = date.toLocaleString('default', { month: 'short', year: '2-digit' });
    const existing = acc.find(item => item.month === monthYear);
    if (existing) {
      existing.orders += 1;
      existing.revenue += parseFloat(order.price) * parseInt(order.orderQuantity);
    } else {
      acc.push({
        month: monthYear,
        orders: 1,
        revenue: parseFloat(order.price) * parseInt(order.orderQuantity)
      });
    }
    return acc;
  }, []).slice(-6);

  // Top products by orders
  const productSalesData = myOrders.reduce((acc, order) => {
    const existing = acc.find(item => item.name === order.productName);
    if (existing) {
      existing.quantity += parseInt(order.orderQuantity);
      existing.revenue += parseFloat(order.price) * parseInt(order.orderQuantity);
    } else {
      acc.push({
        name: order.productName,
        quantity: parseInt(order.orderQuantity),
        revenue: parseFloat(order.price) * parseInt(order.orderQuantity)
      });
    }
    return acc;
  }, []).sort((a, b) => b.quantity - a.quantity).slice(0, 5);

  const COLORS = ['#3b82f6', '#06b6d4', '#8b5cf6', '#ec4899', '#f59e0b'];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-0">
      {/* Header - Responsive padding and text */}
      <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 text-white">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">Dashboard Overview</h1>
        <p className="text-sm sm:text-base text-white/90">Welcome back, {user?.displayName || 'User'}! Here's your business summary.</p>
      </div>

      {/* Stats Cards - Fully responsive grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-base-100 rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 border border-base-content/10 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-base-content/60 font-medium">Total Listings</p>
              <h3 className="text-2xl sm:text-3xl font-bold mt-1">{totalListings}</h3>
            </div>
            <div className="bg-blue-100 p-2 sm:p-3 rounded-lg">
              <Package className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-base-100 rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 border border-base-content/10 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-base-content/60 font-medium">Total Orders</p>
              <h3 className="text-2xl sm:text-3xl font-bold mt-1">{totalOrders}</h3>
            </div>
            <div className="bg-cyan-100 p-2 sm:p-3 rounded-lg">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
            </div>
          </div>
        </div>

        <div className="bg-base-100 rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 border border-base-content/10 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-base-content/60 font-medium">Total Revenue</p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1">{totalRevenue.toFixed(0)} ৳</h3>
            </div>
            <div className="bg-green-100 p-2 sm:p-3 rounded-lg">
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-base-100 rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 border border-base-content/10 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-base-content/60 font-medium">Avg Order Value</p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1">{avgOrderValue} ৳</h3>
            </div>
            <div className="bg-purple-100 p-2 sm:p-3 rounded-lg">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section - Stack on mobile, side by side on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Category Distribution - Pie Chart */}
        <div className="bg-base-100 rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 border border-base-content/10">
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Listings by Category</h3>
          {categoryData.length > 0 ? (
            <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={window.innerWidth < 640 ? 60 : 80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-base-content/60 py-8 md:py-10 text-sm sm:text-base">No data available</p>
          )}
        </div>

        {/* Monthly Orders - Line Chart */}
        <div className="bg-base-100 rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 border border-base-content/10">
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Monthly Orders Trend</h3>
          {monthlyOrdersData.length > 0 ? (
            <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
              <LineChart data={monthlyOrdersData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: window.innerWidth < 640 ? 10 : 12 }}
                />
                <YAxis tick={{ fontSize: window.innerWidth < 640 ? 10 : 12 }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: window.innerWidth < 640 ? '12px' : '14px' }} />
                <Line type="monotone" dataKey="orders" stroke="#3b82f6" strokeWidth={2} name="Orders" />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-base-content/60 py-8 md:py-10 text-sm sm:text-base">No order data available</p>
          )}
        </div>
      </div>

      {/* Top Products - Bar Chart - Full width with responsive height */}
      <div className="bg-base-100 rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 border border-base-content/10">
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Top 5 Products by Sales</h3>
        {productSalesData.length > 0 ? (
          <div className="w-full">
            <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
              <BarChart
                data={productSalesData}
                margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: window.innerWidth < 640 ? 9 : 12 }}
                  angle={window.innerWidth < 640 ? -45 : 0}
                  textAnchor={window.innerWidth < 640 ? "end" : "middle"}
                  height={window.innerWidth < 640 ? 60 : 30}
                />
                <YAxis tick={{ fontSize: window.innerWidth < 640 ? 10 : 12 }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: window.innerWidth < 640 ? '11px' : '14px' }} />
                <Bar dataKey="quantity" fill="#3b82f6" name="Quantity Sold" />
                <Bar dataKey="revenue" fill="#06b6d4" name="Revenue (৳)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="text-center text-base-content/60 py-8 md:py-10 text-sm md:text-base">No product sales data available</p>
        )}
      </div>

      {/* Recent Orders Table - Responsive with horizontal scroll on mobile */}
      <div className="bg-base-100 rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 border border-base-content/10">
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Recent Orders</h3>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          {myOrders.length > 0 ? (
            <table className="table table-sm sm:table-md w-full min-w-[600px] sm:min-w-full">
              <thead>
                <tr className="text-xs sm:text-sm">
                  <th className="px-4 md:px-6">Product</th>
                  <th className="px-4 md:px-6 hidden sm:table-cell">Buyer</th>
                  <th className="px-4 md:px-6 text-center">Qty</th>
                  <th className="px-4 md:px-6 pr-8 md:pr-12 text-right">Price</th>
                  <th className="px-4 md:px-6 hidden md:table-cell">Date</th>
                </tr>
              </thead>
              <tbody>
                {myOrders.slice(0, 5).map((order, index) => (
                  <tr key={index} className="hover:bg-base-200 text-xs sm:text-sm">
                    <td className="px-4 md:px-6">
                      <div className="truncate font-semibold">
                        {order.productName}
                      </div>
                    </td>
                    <td className="px-4 md:px-6 hidden sm:table-cell">
                      <div className="truncate">
                        {order.buyerName}
                      </div>
                    </td>
                    <td className="px-4 md:px-6 text-center">{order.orderQuantity}</td>
                    <td className="px-4 md:px-6 pr-8 md:pr-12 font-semibold text-right whitespace-nowrap">
                      {order.price} ৳
                    </td>
                    <td className="px-4 md:px-6 hidden md:table-cell text-xs opacity-70 whitespace-nowrap">
                      {new Date(order.date).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-base-content/60 py-8 md:py-10 text-sm md:text-base">
              No orders yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;