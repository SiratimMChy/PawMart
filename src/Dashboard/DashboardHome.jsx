import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Package, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [myListings, setMyListings] = useState([]);
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Monthly orders for Line Chart
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
    <div className="space-y-4 sm:space-y-6 p-3 sm:p-4 lg:p-6">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Dashboard Overview</h1>
        <p className="text-sm sm:text-base lg:text-lg text-white/90">Welcome back, {user?.displayName}! Here's your account summary.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-3 sm:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-base-100 rounded-xl shadow-md p-4 sm:p-5 lg:p-6 border border-base-content/10 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-base-content/60 font-medium mb-1">Total Listings</p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{totalListings}</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg shrink-0 ml-2">
              <Package className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-base-100 rounded-xl shadow-md p-4 sm:p-5 lg:p-6 border border-base-content/10 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-base-content/60 font-medium mb-1">Total Orders</p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{totalOrders}</h3>
            </div>
            <div className="bg-cyan-100 p-3 rounded-lg shrink-0 ml-2">
              <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-600" />
            </div>
          </div>
        </div>

        <div className="bg-base-100 rounded-xl shadow-md p-4 sm:p-5 lg:p-6 border border-base-content/10 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-base-content/60 font-medium mb-1">Total Revenue</p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold truncate">{totalRevenue.toFixed(0)} ৳</h3>
            </div>
            <div className="bg-green-100 p-3 rounded-lg shrink-0 ml-2">
              <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-base-100 rounded-xl shadow-md p-4 sm:p-5 lg:p-6 border border-base-content/10 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-base-content/60 font-medium mb-1">Avg Order Value</p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold truncate">{avgOrderValue} ৳</h3>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg shrink-0 ml-2">
              <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Category Distribution - Pie Chart */}
        <div className="bg-base-100 rounded-xl shadow-md p-4 sm:p-6 border border-base-content/10">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">Listings by Category</h3>
          {categoryData.length > 0 ? (
            <>
              <ResponsiveContainer width="100%" height={isMobile ? 280 : 320}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => isMobile ? `${(percent * 100).toFixed(0)}%` : `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={isMobile ? 70 : 100}
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
              {/* Custom Legend */}
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mt-4">
                {categoryData.map((entry, index) => (
                  <div key={`legend-${index}`} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm shrink-0"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-xs sm:text-sm text-base-content/80 font-medium">
                      {entry.name} ({entry.value})
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-base-content/60 py-12 text-sm sm:text-base">No data available</p>
          )}
        </div>

        {/* Monthly Orders - Line Chart */}
        <div className="bg-base-100 rounded-xl shadow-md p-4 sm:p-6 border border-base-content/10">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">Monthly Orders Trend</h3>
          {monthlyOrdersData.length > 0 ? (
            <ResponsiveContainer width="100%" height={isMobile ? 280 : 320}>
              <LineChart data={monthlyOrdersData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: isMobile ? 10 : 12 }}
                />
                <YAxis tick={{ fontSize: isMobile ? 10 : 12 }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: isMobile ? '11px' : '14px' }} />
                <Line type="monotone" dataKey="orders" stroke="#3b82f6" strokeWidth={2} name="Orders" />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-base-content/60 py-12 text-sm sm:text-base">No order data available</p>
          )}
        </div>
      </div>

      {/* Top Products - Bar Chart */}
      <div className="bg-base-100 rounded-xl shadow-md p-4 sm:p-6 border border-base-content/10">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">Top 5 Products by Sales</h3>
        {productSalesData.length > 0 ? (
          <ResponsiveContainer width="100%" height={isMobile ? 280 : 340}>
            <BarChart
              data={productSalesData}
              margin={{ top: 5, right: isMobile ? 5 : 20, left: isMobile ? 0 : 10, bottom: isMobile ? 60 : 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: isMobile ? 9 : 12 }}
                angle={isMobile ? -45 : -15}
                textAnchor="end"
                height={isMobile ? 80 : 60}
                interval={0}
              />
              <YAxis tick={{ fontSize: isMobile ? 10 : 12 }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: isMobile ? '11px' : '14px' }} />
              <Bar dataKey="quantity" fill="#3b82f6" name="Quantity" />
              <Bar dataKey="revenue" fill="#06b6d4" name="Revenue (৳)" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-base-content/60 py-12 text-sm sm:text-base">No product sales data available</p>
        )}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-base-100 rounded-xl shadow-md p-4 sm:p-6 border border-base-content/10">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          {myOrders.length > 0 ? (
            <table className="table w-full">
              <thead>
                <tr className="text-xs sm:text-sm">
                  <th className="px-2 sm:px-4">Product</th>
                  <th className="px-2 sm:px-4 hidden sm:table-cell">Buyer</th>
                  <th className="px-2 sm:px-4 text-center">Qty</th>
                  <th className="px-2 sm:px-4 text-right">Price</th>
                  <th className="px-2 sm:px-4 hidden md:table-cell">Date</th>
                </tr>
              </thead>
              <tbody>
                {myOrders.slice(0, 5).map((order, index) => (
                  <tr key={index} className="hover:bg-base-200 text-xs sm:text-sm">
                    <td className="px-2 sm:px-4">
                      <div className="font-semibold max-w-[120px] sm:max-w-[200px] truncate">
                        {order.productName}
                      </div>
                    </td>
                    <td className="px-2 sm:px-4 hidden sm:table-cell">
                      <div className="max-w-[150px] truncate">
                        {order.buyerName}
                      </div>
                    </td>
                    <td className="px-2 sm:px-4 text-center">{order.orderQuantity}</td>
                    <td className="px-2 sm:px-4 font-semibold text-right whitespace-nowrap">
                      {order.price} ৳
                    </td>
                    <td className="px-2 sm:px-4 hidden md:table-cell text-xs opacity-70 whitespace-nowrap">
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
            <p className="text-center text-base-content/60 py-12 text-sm sm:text-base">
              No orders yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;