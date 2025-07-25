import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboardPage = location.pathname.includes('dashboard');
  const isLoggedIn = localStorage.getItem('user'); // Your auth check

  const handleDashboardClick = (path) => {
    if (isLoggedIn) {
      navigate(path);
    }
    // If not logged in, the menu will show login/register options
  };

  // Modified menu structure
  const menu = isLoggedIn ? (
    <Menu>
      <Menu.Item key="1" onClick={() => handleDashboardClick('/agent-dashboard')}>
        Agent Dashboard
      </Menu.Item>
      <Menu.Item key="2" onClick={() => handleDashboardClick('/landlord-dashboard')}>
        Landlord Dashboard
      </Menu.Item>
    </Menu>
  ) : (
    <Menu>
      <Menu.Item key="3" onClick={() => navigate('/login')}>
        Login to Access Dashboard
      </Menu.Item>
      <Menu.Item key="4" onClick={() => navigate('/register')}>
        Register for an Account
      </Menu.Item>
    </Menu>
  );

  // Rest of your original code remains exactly the same
  return (
    <nav className={`p-4 fixed w-full top-0 z-50 ${
      isDashboardPage ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="../assets/logo.jpg" alt="Logo" className="h-8 w-8" />
            <span className={`ml-2 text-xl ${
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
          <Dropdown overlay={menu}>
            <span className={`cursor-pointer hover:text-blue-500 ${
              isDashboardPage ? 'text-gray-700' : 'text-white'
            }`}>
              Features <DownOutlined className="ml-1" />
            </span>
          </Dropdown>
          <Link 
            to="/about" 
            className={`hover:text-blue-500 ${
              isDashboardPage ? 'text-gray-700' : 'text-white'
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/register" 
            className={`px-4 py-2 rounded border hover:text-blue-500 ${
              isDashboardPage 
                ? 'text-gray-700 border-gray-700' 
                : 'text-white border-white'
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;