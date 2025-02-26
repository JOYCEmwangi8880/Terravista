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
      name: 'Amelia Kimani', 
      type: '2BH', 
      date: '23 May 2020', 
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
      houseNo: 'A4',
      rentAmount: 25000,
      rentStatus: { isPaid: true, balance: 0 },
      phoneNumber: '+254 712 345 678'
    },
    { 
      id: '2',
      name: 'James Makau', 
      type: '1BH', 
      date: '2 May 2020', 
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      houseNo: 'B2',
      rentAmount: 15000,
      rentStatus: { isPaid: false, balance: 5000 },
      phoneNumber: '+254 723 456 789'
    },
    { 
      id: '3',
      name: 'Gladys Wanjiru', 
      type: '2BH', 
      date: '23 Mar 2019', 
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
      houseNo: 'A7',
      rentAmount: 25000,
      rentStatus: { isPaid: true, balance: 0 },
      phoneNumber: '+254 734 567 890'
    },
    { 
      id: '4',
      name: 'Eric Nduku', 
      type: '4BHK', 
      date: '12 Mar 2019', 
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      houseNo: 'C1',
      rentAmount: 45000,
      rentStatus: { isPaid: false, balance: 15000 },
      phoneNumber: '+254 745 678 901'
    },
    { 
      id: '5',
      name: 'Maggi Kimani', 
      type: '3BHK', 
      date: '6 May 2020', 
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
      houseNo: 'B5',
      rentAmount: 35000,
      rentStatus: { isPaid: true, balance: 0 },
      phoneNumber: '+254 756 789 012'
    },
    { 
      id: '6',
      name: 'Maggi Kimani', 
      type: '3BHK', 
      date: '6 May 2020', 
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
      houseNo: 'B5',
      rentAmount: 35000,
      rentStatus: { isPaid: true, balance: 0 },
      phoneNumber: '+254 756 789 012'
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
    }
  ];

  const menuItems = [
    { icon: <DashboardOutlined />, text: 'Dashboard', active: true },
    { icon: <UserOutlined />, text: 'New Requests' },
    { icon: <TeamOutlined />, text: 'My Tenants' },
    { icon: <HomeOutlined />, text: 'My Property' },
    { icon: <FileTextOutlined />, text: 'Reports' },
    { icon: <TransactionOutlined />, text: 'All Transactions' }
  ];

  return (
    <div className='pt-16'>
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
        <Link to="/add-tenant">
  <Button type="primary" icon={<PlusOutlined />} className="w-full mb-6 bg-yellow-400 border-yellow-400 hover:bg-yellow-500">
    Invite new Tenant
  </Button>
</Link>
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer
                  ${item.active ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
              >
                {item.icon}
                <span>{item.text}</span>
              </div>
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