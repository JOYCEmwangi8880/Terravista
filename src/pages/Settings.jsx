import React from "react";

const Settings = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Section */}
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Profile Information</h2>
          <div className="space-y-4">
            {/* Avatar */}
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Profile"
                className="w-20 h-20 rounded-full border"
              />
              <button className="bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300">
                Change Photo
              </button>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded-lg p-2"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border rounded-lg p-2"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full border rounded-lg p-2"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium mb-1">Role</label>
              <select className="w-full border rounded-lg p-2">
                <option>Tenant</option>
                <option>Landlord</option>
                <option>Admin</option>
              </select>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Update Profile
            </button>
          </div>
        </section>

        {/* Security + Logout Section */}
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Security</h2>
          <div className="space-y-4">
            {/* Last login (static for now) */}
            <p className="text-sm text-gray-600">
              Last login: <span className="font-medium">Aug 24, 2025 - 9:45 AM</span>
            </p>

            {/* Change password */}
            <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 w-full text-left">
              Change Password
            </button>

            {/* Two-Factor placeholder */}
            <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 w-full text-left">
              Enable Two-Factor Authentication
            </button>
          </div>

          {/* Logout */}
          <h2 className="text-lg font-medium mt-8 mb-4">Logout</h2>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 w-full">
            Log Out
          </button>
        </section>
      </div>
    </div>
  );
};

export default Settings;
