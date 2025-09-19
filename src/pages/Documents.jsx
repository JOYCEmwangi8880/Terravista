import React from "react";

const Documents = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow space-y-4">
      <h2 className="text-xl font-semibold">Tenant Documents</h2>

      <div>
        <label className="block text-sm font-medium">ID / Passport Number</label>
        <input
          type="text"
          className="mt-1 block w-full rounded border-gray-300 shadow-sm"
          placeholder="Enter ID number"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Passport Photo</label>
        <input type="file" accept="image/*" />
      </div>

      <button className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600">
        Submit
      </button>
    </div>
  );
};

export default Documents;