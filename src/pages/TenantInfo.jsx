import React from 'react';
import { Card, Row, Col, Tag, Avatar, Button, Divider } from 'antd';
import { UserOutlined, PhoneOutlined, HomeOutlined, CalendarOutlined } from '@ant-design/icons';
import { useParams, Link } from 'react-router-dom';

const TenantInfo = () => {
  const { id } = useParams();

  // Mock tenant data (in a real app, you'd fetch this based on the id)
  const tenantData = {
    id: '1',
    name: "Amelia Kimani",
    photo: "https://xsgames.co/randomusers/avatar.php?g=female",
    houseNo: "A4",
    houseType: "2BHK",
    rentAmount: 25000,
    rentStatus: {
      isPaid: true,
      balance: 0,
      lastPaid: "2024-03-15"
    },
    dateEntered: "2020-05-23",
    phoneNumber: "+254 712 345 678",
    email: "amelia.kimani@email.com",
    emergencyContact: {
      name: "John Kimani",
      phone: "+254 723 456 789",
      relationship: "Spouse"
    },
    idNumber: "12345678",
    address: "123 Mombasa Road, Nairobi"
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/agent-dashboard" className="mb-4 inline-block">
        <Button type="default">&larr; Back to Dashboard</Button>
      </Link>

      <Card className="shadow-lg">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Avatar 
              size={64} 
              src={tenantData.photo}
              icon={<UserOutlined />}
            />
            <div>
              <h1 className="text-2xl font-bold">{tenantData.name}</h1>
              <p className="text-gray-500">ID Number: {tenantData.idNumber}</p>
            </div>
          </div>
          <Tag 
            color={tenantData.rentStatus.isPaid ? "green" : "red"} 
            className="text-lg px-4 py-1"
          >
            {tenantData.rentStatus.isPaid ? "Rent Cleared" : "Rent Pending"}
          </Tag>
        </div>

        <Divider />

        {/* Main Information Grid */}
        <Row gutter={[24, 24]}>
          {/* House Details */}
          <Col span={12}>
            <Card title="House Information" className="h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">House Number:</span>
                  <span className="font-semibold">{tenantData.houseNo}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">House Type:</span>
                  <span className="font-semibold">{tenantData.houseType}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Monthly Rent:</span>
                  <span className="font-semibold">KES {tenantData.rentAmount.toLocaleString()}</span>
                </div>
              </div>
            </Card>
          </Col>

          {/* Rent Status */}
          <Col span={12}>
            <Card title="Rent Status" className="h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Status:</span>
                  <Tag color={tenantData.rentStatus.isPaid ? "green" : "red"}>
                    {tenantData.rentStatus.isPaid ? "Paid" : "Pending"}
                  </Tag>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Balance:</span>
                  <span className="font-semibold">
                    KES {tenantData.rentStatus.balance.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Last Payment:</span>
                  <span className="font-semibold">{tenantData.rentStatus.lastPaid}</span>
                </div>
              </div>
            </Card>
          </Col>

          {/* Contact Information */}
          <Col span={12}>
            <Card title="Contact Information" className="h-full">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <PhoneOutlined className="text-gray-500" />
                  <span>{tenantData.phoneNumber}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <UserOutlined className="text-gray-500" />
                  <span>{tenantData.email}</span>
                </div>
                <Divider orientation="left">Emergency Contact</Divider>
                <div className="space-y-2">
                  <p><strong>{tenantData.emergencyContact.name}</strong></p>
                  <p>{tenantData.emergencyContact.phone}</p>
                  <p className="text-gray-500">{tenantData.emergencyContact.relationship}</p>
                </div>
              </div>
            </Card>
          </Col>

          {/* Tenancy Details */}
          <Col span={12}>
            <Card title="Tenancy Details" className="h-full">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CalendarOutlined className="text-gray-500" />
                  <span>Move-in Date: {tenantData.dateEntered}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HomeOutlined className="text-gray-500" />
                  <span>Duration: {calculateDuration(tenantData.dateEntered)}</span>
                </div>
                <div className="mt-4">
                  <p className="text-gray-500">Permanent Address:</p>
                  <p>{tenantData.address}</p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Action Buttons */}
        <div className="flex justify-end mt-6 space-x-4">
          <Button type="default">Edit Information</Button>
          <Button type="primary" danger>Terminate Tenancy</Button>
        </div>
      </Card>
    </div>
  );
};

// Helper function to calculate duration of stay
const calculateDuration = (dateEntered) => {
  const start = new Date(dateEntered);
  const now = new Date();
  const years = now.getFullYear() - start.getFullYear();
  const months = now.getMonth() - start.getMonth();
  
  if (months < 0) {
    return `${years - 1} years, ${months + 12} months`;
  }
  return `${years} years, ${months} months`;
};

export default TenantInfo;
