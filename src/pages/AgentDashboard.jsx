import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button, Progress, Avatar, List, Tag, Badge } from 'antd';
import { UserOutlined, BellOutlined, PlusOutlined, HomeOutlined, 
         FileTextOutlined, TeamOutlined, BarChartOutlined, 
         TransactionOutlined, DashboardOutlined } from '@ant-design/icons';

const AgentDashboard = () => {
  // Mock data for tenants
  const tenantRequests = [
    { 
      id: '1',
      name: 'Sophia Njeri', 
      type: 'Studio', 
      date: '15 Jan 2021', 
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female&p=1',
      houseNo: 'S101',
      rentAmount: 18000,
      rentStatus: { isPaid: true, balance: 0 },
      phoneNumber: '+254 711 111 111'
    },
    { 
      id: '2',
      name: 'Brian Otieno', 
      type: '1BHK', 
      date: '22 Feb 2021', 
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male&p=2',
      houseNo: 'B205',
      rentAmount: 22000,
      rentStatus: { isPaid: false, balance: 7000 },
      phoneNumber: '+254 722 222 222'
    },
    { 
      id: '3',
      name: 'Grace Akinyi', 
      type: '2BHK', 
      date: '5 Mar 2021', 
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female&p=3',
      houseNo: 'C312',
      rentAmount: 32000,
      rentStatus: { isPaid: true, balance: 0 },
      phoneNumber: '+254 733 333 333'
    },
    { 
      id: '4',
      name: 'Victor Omollo', 
      type: '3BHK', 
      date: '18 Apr 2021', 
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male&p=4',
      houseNo: 'D417',
      rentAmount: 38000,
      rentStatus: { isPaid: false, balance: 10000 },
      phoneNumber: '+254 744 444 444'
    },
    { 
      id: '5',
      name: 'Winnie Adhiambo', 
      type: 'Penthouse', 
      date: '30 May 2021', 
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female&p=5',
      houseNo: 'P501',
      rentAmount: 65000,
      rentStatus: { isPaid: true, balance: 0 },
      phoneNumber: '+254 755 555 555'
    },
    { 
      id: '6',
      name: 'Joseph Kipchoge', 
      type: '1BHK', 
      date: '12 Jun 2021', 
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male&p=6',
      houseNo: 'A106',
      rentAmount: 19500,
      rentStatus: { isPaid: false, balance: 9500 },
      phoneNumber: '+254 766 666 666'
    },
    { 
      id: '7',
      name: 'Esther Wangui', 
      type: '2BHK', 
      date: '25 Jul 2021', 
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female&p=7',
      houseNo: 'E209',
      rentAmount: 28500,
      rentStatus: { isPaid: true, balance: 0 },
      phoneNumber: '+254 777 777 777'
    },
    { 
      id: '8',
      name: 'Daniel Mbugua', 
      type: '3BHK', 
      date: '8 Aug 2021', 
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male&p=8',
      houseNo: 'F304',
      rentAmount: 42000,
      rentStatus: { isPaid: true, balance: 0 },
      phoneNumber: '+254 788 888 888'
    },
    { 
      id: '9',
      name: 'Lilian Atieno', 
      type: 'Studio', 
      date: '19 Sep 2021', 
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female&p=9',
      houseNo: 'S202',
      rentAmount: 17500,
      rentStatus: { isPaid: false, balance: 17500 },
      phoneNumber: '+254 799 999 999'
    },
    { 
      id: '10',
      name: 'Samuel Gitau', 
      type: '4BHK', 
      date: '3 Oct 2021', 
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male&p=10',
      houseNo: 'G410',
      rentAmount: 48000,
      rentStatus: { isPaid: false, balance: 24000 },
      phoneNumber: '+254 700 000 000'
    }
  ];

  const properties = [
    {
      name: '5BHK Apartment',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
      ending: '23 Mar 2019',
      tenants: 12,
      rent: 'KES 15,000',
      daysLeft: 1
    },
    {
      name: '2BHK Apartment',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
      ending: '23 Mar 2019',
      tenants: 12,
      rent: 'KES 15,000',
      daysLeft: 3
    },
    {
      name: '4BHK Apartment',
      image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126',
      ending: '23 Mar 2019',
      tenants: 12,
      rent: 'KES 15,000',
      daysLeft: 5
    },
    {
      name: '4BHK Apartment',
      image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126',
      ending: '23 Mar 2019',
      tenants: 12,
      rent: 'KES 15,000',
      daysLeft: 5
    }
  ];

  const activities = [
    {
      user: 'Eric Nduku',
      action: 'rent has paid the rent',
      time: '2m',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male'
    },
    {
      user: 'Gladys Wanjiru',
      action: 'rent has paid the rent',
      time: '4m',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female'
    },
    {
      user: 'James Makau',
      action: 'rent has paid the rent',
      time: '7m',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male'
    },
    {
      user: 'Joyce Mwangi',
      action: 'rent has paid the rent',
      time: '8m',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male'
    }
  ];

  const menuItems = [
    { 
      icon: <DashboardOutlined />, 
      text: 'Dashboard', 
      path: '/agent-dashboard', 
      active: true 
    },
    { 
      icon: <UserOutlined />, 
      text: 'New Requests', 
      path: '/new-requests' 
    },
    { 
      icon: <TeamOutlined />, 
      text: 'My Tenants', 
      path: '/my-tenants' 
    },
    { 
      icon: <HomeOutlined />, 
      text: 'My Property', 
      path: '/my-property' 
    },
    { 
      icon: <FileTextOutlined />, 
      text: 'Reports', 
      path: '/reports' 
    },
    { 
      icon: <TransactionOutlined />, 
      text: 'All Transactions', 
      path: '/transactions' 
    }
  ];

  return (
    <div className='pt-16'>
      <div className="flex min-h-screen bg-gray-50">
        {/* Left Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <div className="p-4">
            <Link to="/add-tenant">
              <Button 
                type="primary" 
                icon={<PlusOutlined />} 
                className="w-full mb-6 bg-yellow-400 border-yellow-400 hover:bg-yellow-500"
              >
                Invite new Tenant
              </Button>
            </Link>
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.path}
                  className="block"
                >
                  <div 
                    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer
                      ${item.active ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">23 Mar 2024</span>
              <Avatar size="large" src="https://xsgames.co/randomusers/avatar.php?g=female" />
            </div>
          </div>

          {/* Stats Cards */}
          <Row gutter={[16, 16]} className="mb-6">
            <Col span={8}>
              <Card className="h-full">
                <div>
                  <h3 className="text-red-500 text-2xl font-bold">KES 20,000</h3>
                  <p className="text-gray-500 uppercase text-sm">Pending</p>
                  <div className="mt-4">
                    <p className="text-gray-600">2/5 TENANTS</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card className="text-center h-full">
                <Progress type="circle" percent={75} strokeColor="#1890ff" />
                <h3 className="mt-4 text-xl font-bold">KES 145,000</h3>
                <p className="text-gray-500">TOTAL</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card className="h-full">
                <div>
                  <h3 className="text-2xl font-bold">KES 125,000</h3>
                  <p className="text-gray-500 uppercase text-sm">Collected</p>
                  <div className="mt-4">
                    <p className="text-gray-600">3/5 TENANTS</p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>

          {/* Tenant Requests Section */}
          <Card title="Tenant Request" className="mb-6">
            <List
              dataSource={tenantRequests}
              renderItem={item => (
                <List.Item
                  extra={
                    <Link to={`/tenant-info/${item.id}`}>
                      <Button 
                        type="primary" 
                        className="bg-yellow-400 border-yellow-400 hover:bg-yellow-500"
                      >
                        VIEW
                      </Button>
                    </Link>
                  }
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={item.name}
                    description={`${item.type} • ${item.date}`}
                  />
                </List.Item>
              )}
            />
          </Card>

          {/* Lease Status Section */}
          <Card title="Lease Status">
            <Row gutter={[16, 16]}>
              {properties.map((property, index) => (
                <Col span={24} key={index}>
                  <Card className="bg-gray-50">
                    <div className="flex">
                      <img 
                        src={property.image} 
                        alt={property.name}
                        className="w-32 h-24 object-cover rounded-lg mr-4"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">{property.name}</h4>
                            <p className="text-sm text-gray-500">
                              ENDING: {property.ending}
                            </p>
                            <p className="text-sm text-gray-500">
                              TENANTS: {property.tenants}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">RENT</p>
                            <p className="font-medium">{property.rent}</p>
                            <p className="text-sm text-red-500">
                              LEFT: {property.daysLeft} Days
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>

          {/* Pay Reminder Card */}
          <Card className="mb-6 bg-yellow-50 border-yellow-400">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-yellow-400 rounded-lg">
                <BellOutlined className="text-white text-xl" />
              </div>
              <Button type="primary" className="bg-yellow-400 border-yellow-400">
                Send reminder
              </Button>
            </div>
            <h3 className="font-medium">Pay Reminder</h3>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-2xl font-bold">34</h3>
              <p className="text-gray-500">VACANT</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-2xl font-bold">12</h3>
              <p className="text-gray-500">OCCUPIED</p>
            </div>
          </div>

          {/* Activity Section */}
          <Card title="Activity" className="mb-6">
            <List
              dataSource={activities}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={item.user}
                    description={item.action}
                  />
                  <div className="text-gray-500">{item.time}</div>
                </List.Item>
              )}
            />
          </Card>

          {/* Alerts Section */}
          <Card title="Alerts">
            <div className="text-gray-600">
              You have <span className="text-blue-500">23</span> Tenant who going complete
              <span className="text-gray-400 ml-1">1 h</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male" />
                <span className="ml-2">Eric Nduku</span>
              </div>
              <span className="text-gray-500">Say Congratulations</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;