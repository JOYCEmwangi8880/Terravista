import React from 'react';
import { Card, Row, Col, Button, Progress, Avatar, List, Tag, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  TeamOutlined,
  DollarOutlined,
  FileTextOutlined,
  SettingOutlined,
  BellOutlined,
  PlusOutlined,
  UserOutlined,
  BarChartOutlined,
} from '@ant-design/icons';

const LandlordDashboard = () => {
  // Mock data for properties
  const properties = [
    {
      id: '1',
      name: 'Green Park Apartments',
      location: 'Westlands, Nairobi',
      units: 20,
      occupiedUnits: 18,
      totalRent: 450000,
      collectedRent: 380000,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
      agent: 'John Doe'
    },
    {
      id: '2',
      name: 'Sunrise Heights',
      location: 'Kilimani, Nairobi',
      units: 15,
      occupiedUnits: 12,
      totalRent: 375000,
      collectedRent: 300000,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
      agent: 'Jane Smith'
    },
    {
      id: '3',
      name: 'Blue Waters Estate',
      location: 'Lavington, Nairobi',
      units: 25,
      occupiedUnits: 22,
      totalRent: 625000,
      collectedRent: 550000,
      image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126',
      agent: 'Mike Johnson'
    },
    {
      id: '4',
      name: 'Blue Waters Estate',
      location: 'Lavington, Nairobi',
      units: 25,
      occupiedUnits: 22,
      totalRent: 625000,
      collectedRent: 550000,
      image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126',
      agent: 'Mike Johnson'
    },
    {
      id: '5',
      name: 'Blue Waters Estate',
      location: 'Lavington, Nairobi',
      units: 25,
      occupiedUnits: 22,
      totalRent: 625000,
      collectedRent: 550000,
      image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126',
      agent: 'Mike Johnson'
    }
  ];

  // Mock data for recent activities
  const recentActivities = [
    {
      id: '1',
      type: 'New Tenant',
      property: 'Green Park Apartments',
      description: 'New tenant moved in to Unit A4',
      date: '2024-03-20',
      amount: 25000
    },
    {
      id: '2',
      type: 'Rent Collection',
      property: 'Sunrise Heights',
      description: 'Monthly rent collected from 12 units',
      date: '2024-03-19',
      amount: 300000
    },
    {
      id: '3',
      type: 'Maintenance',
      property: 'Blue Waters Estate',
      description: 'Plumbing repair in Unit C2',
      date: '2024-03-18',
      amount: -15000
    }
  ];

  const menuItems = [
    { icon: <HomeOutlined />, text: 'Properties', path: '/properties' },
    { icon: <TeamOutlined />, text: 'Tenants', path: '/tenants' },
    { icon: <DollarOutlined />, text: 'Finances', path: '/finances' },
    { icon: <FileTextOutlined />, text: 'Documents', path: '/documents' },
    { icon: <BarChartOutlined />, text: 'Reports', path: '/reports' },
    { icon: <SettingOutlined />, text: 'Settings', path: '/settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-lg p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Landlord Portal</h1>
        </div>
        
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="block">
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                {item.icon}
                <span>{item.text}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Dashboard Overview</h2>
          <div className="flex items-center space-x-4">
            <Button icon={<BellOutlined />} />
            <Avatar size="large" icon={<UserOutlined />} />
          </div>
        </div>

        {/* Stats Cards */}
        <Row gutter={[16, 16]} className="mb-8">
          <Col span={6}>
            <Card>
              <Statistic
                title="Total Properties"
                value={properties.length}
                prefix={<HomeOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Total Units"
                value={properties.reduce((acc, prop) => acc + prop.units, 0)}
                prefix={<TeamOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Total Revenue"
                value={properties.reduce((acc, prop) => acc + prop.collectedRent, 0)}
                prefix="KES"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Occupancy Rate"
                value={Math.round(
                  (properties.reduce((acc, prop) => acc + prop.occupiedUnits, 0) /
                    properties.reduce((acc, prop) => acc + prop.units, 0)) *
                    100
                )}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>

        {/* Properties Section */}
        <Card title="My Properties" extra={<Button type="primary" icon={<PlusOutlined />}>Add Property</Button>} className="mb-8">
          <List
            dataSource={properties}
            renderItem={property => (
              <List.Item>
                <Card className="w-full">
                  <div className="flex">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-48 h-32 object-cover rounded-lg mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-lg font-medium">{property.name}</h3>
                          <p className="text-gray-500">{property.location}</p>
                          <p className="text-sm">Managed by: {property.agent}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">
                            Units: {property.occupiedUnits}/{property.units}
                          </p>
                          <p className="font-medium">
                            Revenue: KES {property.collectedRent.toLocaleString()}
                          </p>
                          <Progress
                            percent={Math.round((property.collectedRent / property.totalRent) * 100)}
                            size="small"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </Card>

        {/* Recent Activities */}
        <Card title="Recent Activities">
          <List
            dataSource={recentActivities}
            renderItem={activity => (
              <List.Item>
                <List.Item.Meta
                  title={activity.type}
                  description={`${activity.property} - ${activity.description}`}
                />
                <div>
                  <div className={`text-right ${activity.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    KES {Math.abs(activity.amount).toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">{activity.date}</div>
                </div>
              </List.Item>
            )}
          />
        </Card>
      </div>
    </div>
  );
};

export default LandlordDashboard;
