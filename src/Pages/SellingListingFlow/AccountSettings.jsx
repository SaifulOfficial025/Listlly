import React from 'react';

function AccountSettings() {
  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto pt-10 px-4">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-red-500">Account</span> <span className="text-black">Settings</span>
        </h1>
        <p className="text-center text-gray-500 mt-2">Manage your account details</p>
      </div>

      {/* Profile Picture */}
      <div className="max-w-5xl mx-auto mt-10 px-4">
        <h2 className="text-lg font-semibold text-black">Profile Picture</h2>
        <div className="flex items-center gap-4 mt-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-200">
            <img src="https://i.pravatar.cc/100" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <button className="text-red-500 text-sm font-medium">Upload New Picture</button>
            <p className="text-xs text-gray-500">JPEG or PNG, max 2MB</p>
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <div className="max-w-5xl mx-auto mt-10 px-4">
        <h2 className="text-lg font-semibold text-black">Personal Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <input type="text" placeholder="First Name" className="border rounded px-4 py-3 text-sm w-full dark:bg-white text-black" />
          <input type="text" placeholder="Last Name" className="border rounded px-4 py-3 text-sm w-full dark:bg-white text-black" />
        </div>
      </div>

      {/* Change Password */}
      <div className="max-w-5xl mx-auto mt-10 px-4">
        <h2 className="text-lg font-semibold text-black">Change Password</h2>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div className="relative">
            <input type="password" placeholder="Current Password" className="border rounded px-4 py-3 text-sm w-full dark:bg-white text-black" />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">👁</button>
          </div>
          <div className="relative">
            <input type="password" placeholder="New Password" className="border rounded px-4 py-3 text-sm w-full dark:bg-white text-black" />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">👁</button>
          </div>
          <div className="relative">
            <input type="password" placeholder="Confirm Password" className="border rounded px-4 py-3 text-sm w-full dark:bg-white text-black" />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">👁</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
