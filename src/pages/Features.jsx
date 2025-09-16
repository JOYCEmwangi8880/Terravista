import React from 'react'

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Our Features
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Simplify and optimize your rental management with TerraVista
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Feature Cards */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">Property Management</h3>
            <p className="mt-2 text-sm text-gray-500">
              Keep all your properties and tenant information organized in one central platform.
            </p>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">Rent Collection</h3>
            <p className="mt-2 text-sm text-gray-500">
              Automate rent collection and monitor payments with ease.
            </p>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">Maintenance Requests</h3>
            <p className="mt-2 text-sm text-gray-500">
              Receive, manage, and track maintenance requests from start to finish.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
