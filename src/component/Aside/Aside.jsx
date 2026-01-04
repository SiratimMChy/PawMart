import React, { useState } from 'react';
import { Home, FileText, ShoppingCart, LogOut, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router';
import { MdDashboard } from "react-icons/md";
import { signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.config';

const Aside = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    signOut(auth);
    navigate('/login');
  }

  return (
    <aside className={`min-h-screen ${isCollapsed ? 'w-20' : 'w-45 md:w-64'} bg-linear-to-b from-base-100 to-base-200 border-r border-base-content/10 flex flex-col shadow-lg transition-all duration-300 relative`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`absolute top-4 ${isCollapsed ? 'left-1/2 -translate-x-1/2' : 'right-4'} bg-base-100 border border-base-content/10 rounded-full p-1.5 shadow-md  hover:border-base-200 transition-all duration-200 z-10`}
      >
        {isCollapsed ? <ChevronRight size={16} className="text-base-content/60" /> : <ChevronLeft size={16} className="text-base-content/60" />}
      </button>

      {/* Header */}
      <div className="px-6 pt-4 pb-6 border-b border-base-content/10 bg-base-100">
        <div className={`flex items-center gap-3 mb-2 ${isCollapsed ? 'justify-center' : ''}`}>
          {!isCollapsed && (
            <div>
              <h1 className="text-lg font-bold tracking-tight bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Dashboard
              </h1>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-1.5 px-4 py-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
              ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-md'
              : 'text-base-content hover:bg-blue-50 hover:text-blue-600'
            } ${isCollapsed ? 'justify-center' : ''}`
          }
          title={isCollapsed ? 'Dashboard' : ''}
        >
          <Home className='w-5 h-5' />
          {!isCollapsed && <span className="font-medium text-sm">Home</span>}
        </NavLink>

        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
              ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-md'
              : 'text-base-content hover:bg-blue-50 hover:text-blue-600'
            } ${isCollapsed ? 'justify-center' : ''}`
          }
          title={isCollapsed ? 'Dashboard' : ''}
        >
          <MdDashboard className='w-5 h-5' />
          {!isCollapsed && <span className="font-medium text-sm">Dashboard</span>}
        </NavLink>

        <NavLink
          to="/dashboard/AddListing"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
              ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-md'
              : 'text-base-content hover:bg-blue-50 hover:text-blue-600'
            } ${isCollapsed ? 'justify-center' : ''}`
          }
          title={isCollapsed ? 'Add Listing' : ''}
        >
          <Plus className='w-5 h-5' />
          {!isCollapsed && <span className="font-medium text-sm">Add Listing</span>}
        </NavLink>

        <NavLink
          to="/dashboard/MyListing"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
              ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-md'
              : 'text-base-content hover:bg-blue-50 hover:text-blue-600'
            } ${isCollapsed ? 'justify-center' : ''}`
          }
          title={isCollapsed ? 'My Listings' : ''}
        >
          <FileText className='w-5 h-5' />
          {!isCollapsed && <span className="font-medium text-sm">My Listings</span>}
        </NavLink>

        <NavLink
          to="/dashboard/MyOrders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
              ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-md'
              : 'text-base-content hover:bg-blue-50 hover:text-blue-600'
            } ${isCollapsed ? 'justify-center' : ''}`
          }
          title={isCollapsed ? 'My Orders' : ''}
        >
          <ShoppingCart className='w-5 h-5' />
          {!isCollapsed && <span className="font-medium text-sm">My Orders</span>}
        </NavLink>
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-base-content/10 bg-base-100">
        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-base-content hover:bg-blue-50 hover:text-blue-600 border border-base-content/10 hover:border-blue-200 transition-all duration-200 ${isCollapsed ? 'justify-center' : ''}`}
          title={isCollapsed ? 'Logout' : ''}
        >
          <LogOut size={18} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Aside;