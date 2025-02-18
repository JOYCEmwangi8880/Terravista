import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserTie, FaUsers, FaMoneyBillWave, FaTools, FaBuilding, FaClipboardList, FaChevronDown } from 'react-icons/fa';

const Features = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen pt-24">
      {/* Features Dropdown */}
      <div className="max-w-7xl mx-auto px-4 relative mb-8">
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors"
        >
          <span className="text-xl font-semibold">FEATURES</span>
          <FaChevronDown className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 w-64 mt-2 bg-white rounded-lg shadow-xl z-50">
            <Link 
              to="/landlord/property-management" 
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b border-gray-100"
            >
              <div className="flex items-center gap-3">
                <FaBuilding className="text-blue-500" />
                <div>
                  <p className="font-medium">Property Management</p>
                  <p className="text-xs text-gray-500">Manage properties and units</p>
                </div>
              </div>
            </Link>

            <Link 
              to="/caretaker/tenant-management" 
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b border-gray-100"
            >
              <div className="flex items-center gap-3">
                <FaUsers className="text-blue-500" />
                <div>
                  <p className="font-medium">Tenant Management</p>
                  <p className="text-xs text-gray-500">Add and manage tenants</p>
                </div>
              </div>
            </Link>

            <Link 
              to="/landlord/rent-collection" 
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b border-gray-100"
            >
              <div className="flex items-center gap-3">
                <FaMoneyBillWave className="text-blue-500" />
                <div>
                  <p className="font-medium">Rent Collection</p>
                  <p className="text-xs text-gray-500">Track payments and balances</p>
                </div>
              </div>
            </Link>

            <Link 
              to="/caretaker/maintenance" 
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50"
            >
              <div className="flex items-center gap-3">
                <FaTools className="text-blue-500" />
                <div>
                  <p className="font-medium">Maintenance</p>
                  <p className="text-xs text-gray-500">Handle maintenance requests</p>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-blue-600 to-blue-800 mb-12">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Powerful Features for Property Management</h1>
          <p className="text-xl text-center max-w-3xl">
            Everything you need to manage your rental properties efficiently and smoothly
          </p>
        </div>
      </div>

      {/* Role-based Features Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Landlord Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <FaUserTie className="text-blue-500 text-2xl" />
              <h2 className="text-2xl font-bold text-blue-500">Landlord Dashboard</h2>
            </div>
            <div className="space-y-4">
              <Link 
                to="/landlord/property-management"
                className="block p-4 rounded-lg hover:bg-blue-50 transition-colors border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <FaBuilding className="text-blue-500" />
                  <div>
                    <h3 className="font-semibold">Property Management</h3>
                    <p className="text-sm text-gray-500">Manage your properties and units</p>
                  </div>
                </div>
              </Link>

              <Link 
                to="/landlord/rent-collection"
                className="block p-4 rounded-lg hover:bg-blue-50 transition-colors border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <FaMoneyBillWave className="text-blue-500" />
                  <div>
                    <h3 className="font-semibold">Rent Collection</h3>
                    <p className="text-sm text-gray-500">Track payments and balances</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Caretaker Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <FaUsers className="text-green-500 text-2xl" />
              <h2 className="text-2xl font-bold text-green-500">Caretaker Dashboard</h2>
            </div>
            <div className="space-y-4">
              <Link 
                to="/caretaker/tenant-management"
                className="block p-4 rounded-lg hover:bg-green-50 transition-colors border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <FaClipboardList className="text-green-500" />
                  <div>
                    <h3 className="font-semibold">Tenant's Management</h3>
                    <p className="text-sm text-gray-500">Add and manage tenants</p>
                  </div>
                </div>
              </Link>

              <Link 
                to="/caretaker/maintenance"
                className="block p-4 rounded-lg hover:bg-green-50 transition-colors border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <FaTools className="text-green-500" />
                  <div>
                    <h3 className="font-semibold">Maintenance Requests</h3>
                    <p className="text-sm text-gray-500">Handle maintenance issues</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
