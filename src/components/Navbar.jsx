import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboardPage = location.pathname.includes('dashboard');
  
  // Check if user is logged in (replace with your actual auth check)
  const isLoggedIn = localStorage.getItem('authToken');

  const handleDashboardClick = (path) => {
    if (isLoggedIn) {
      navigate(path); // Go directly to dashboard
    } else {
      navigate('/login', { 
        state: { 
          redirectTo: path,
          dashboardType: path.includes('agent') ? 'Agent' : 'Landlord',
          showRegisterPrompt: true // Flag to show register option on login page
        }
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  // Dashboard selection dropdown menu
  const dashboardMenu = (
    <Menu>
      <Menu.Item 
        key="agent" 
        onClick={() => handleDashboardClick('/agent-dashboard')}
      >
        Agent Dashboard
      </Menu.Item>
      <Menu.Item 
        key="landlord" 
        onClick={() => handleDashboardClick('/landlord-dashboard')}
      >
        Landlord Dashboard
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className={`p-4 fixed w-full top-0 z-50 ${
      isDashboardPage ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="../assets/logo.jpg" 
              alt="Logo" 
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className={`ml-2 text-xl font-semibold ${
              isDashboardPage ? 'text-gray-800' : 'text-white'
            }`}>
              Terra<span className="text-blue-500">Vista</span>
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <Link 
            to="/" 
            className={`hover:text-blue-500 ${
              isDashboardPage ? 'text-gray-700' : 'text-white'
            }`}
          >
            Home
          </Link>
          
          <Link 
            to="/about" 
            className={`hover:text-blue-500 ${
              isDashboardPage ? 'text-gray-700' : 'text-white'
            }`}
          >
            About Us
          </Link>
          
          {!isLoggedIn ? (
            <>
              <Link 
                to="/register" 
                className={`px-4 py-2 rounded border ${
                  isDashboardPage 
                    ? 'text-gray-700 border-gray-700 hover:bg-gray-100' 
                    : 'text-white border-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                Register
              </Link>
              <Link 
                to="/login" 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Login
              </Link>
              
              <Dropdown overlay={dashboardMenu} placement="bottomRight">
                <div className={`flex items-center cursor-pointer px-3 py-2 rounded-full border ${
                  isDashboardPage 
                    ? 'text-gray-700 border-gray-300 hover:bg-gray-50' 
                    : 'text-white border-white border-opacity-50 hover:bg-white hover:bg-opacity-10'
                }`}>
                  <UserOutlined className="text-lg" />
                  <DownOutlined className="ml-2 text-xs" />
                </div>
              </Dropdown>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-700 px-4 py-2 rounded border border-red-500 hover:border-red-700"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;