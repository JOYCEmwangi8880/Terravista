import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url(`../public/assets/rehoboth.jpg')", 
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">About TerraVista</h1>
          <p className="text-xl text-center max-w-3xl">
            Streamlining property management for landlords, agents, caretakers and tenants
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Mission Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            To simplify rental property management by providing a comprehensive platform 
            that connects landlords, caretakers, and tenants while streamlining bills 
            collection and property maintenance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">For Landlords</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Real-time rent collection tracking</li>
              <li>• Property performance analytics</li>
              <li>• Tenant payment history</li>
              <li>• Direct communication with caretakers</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">For Caretakers</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Easy tenant management</li>
              <li>• Streamlined rent collection</li>
              <li>• Maintenance request tracking</li>
              <li>• Automated payment reminders</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">For Tenants</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Simple rent payment process</li>
              <li>• Payment history access</li>
              <li>• Maintenance request submission</li>
              <li>• Direct communication channel</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-blue-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose TerraVista?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 p-2 rounded-full text-white mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Efficient Management</h3>
                <p className="text-gray-600">
                  Streamline your rental property operations with our comprehensive management tools.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 p-2 rounded-full text-white mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
                <p className="text-gray-600">
                  Your data is protected with industry-standard security measures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
