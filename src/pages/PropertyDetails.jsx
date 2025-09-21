import React from 'react';
import { Card, Row, Col, Button, Table, Tag, Progress, Tabs, List, Avatar } from 'antd';
import { HomeOutlined, UserOutlined, DollarOutlined, ToolOutlined } from '@ant-design/icons';

const PropertyDetails = () => {
  // --- Mock Data ---
  const units = [
    { id: '1', unitNo: 'A1', type: '2BHK', tenant: 'John Kamau', rentAmount: 25000, status: 'Occupied', lastPayment: '2024-03-01', dueDate: '2024-04-01' },
    { id: '2', unitNo: 'A2', type: '1BHK', tenant: null, rentAmount: 15000, status: 'Vacant', lastPayment: null, dueDate: null },
    { id: '3', unitNo: 'A3', type: '1BHK', tenant: null, rentAmount: 15000, status: 'Vacant', lastPayment: null, dueDate: null },
    { id: '4', unitNo: 'B1', type: 'Studio', tenant: null, rentAmount: 10000, status: 'Vacant', lastPayment: null, dueDate: null },
  ];

  const maintenanceRecords = [
    { id: '1', date: '2024-03-15', issue: 'Plumbing repair', unit: 'A1', cost: 5000, status: 'Completed' },
    { id: '2', date: '2024-03-20', issue: 'Electrical wiring', unit: 'A2', cost: 3000, status: 'Pending' },
    { id: '3', date: '2024-03-25', issue: 'Painting', unit: 'B1', cost: 7000, status: 'In Progress' },
  ];

  // --- Table Columns ---
  const columns = [
    { title: 'Unit No', dataIndex: 'unitNo', key: 'unitNo' },
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { title: 'Tenant', dataIndex: 'tenant', key: 'tenant', render: (tenant) => tenant || 'Vacant' },
    { title: 'Rent Amount', dataIndex: 'rentAmount', key: 'rentAmount', render: (amt) => `KES ${amt.toLocaleString()}` },
    { 
      title: 'Status', dataIndex: 'status', key: 'status',
      render: (status) => <Tag color={status === 'Occupied' ? 'green' : status === 'Vacant' ? 'red' : 'orange'}>{status}</Tag> 
    },
    { title: 'Actions', key: 'actions', render: () => <Button type="link">View Details</Button> },
  ];

  // --- Dashboard Summary ---
  const summaryStats = [
    { title: 'Total Units', value: 20, icon: <HomeOutlined className="text-3xl text-blue-500 mb-2" /> },
    { title: 'Occupancy', value: <Progress type="circle" percent={90} width={80} />, icon: <UserOutlined className="text-3xl text-green-500 mb-2" /> },
    { title: 'Revenue', value: `KES 450,000`, icon: <DollarOutlined className="text-3xl text-yellow-500 mb-2" /> },
    { title: 'Maintenance', value: '3 Pending', icon: <ToolOutlined className="text-3xl text-red-500 mb-2" /> },
  ];

  // --- Tabs Content ---
  const items = [
    { key: '1', label: 'Units', children: <Table columns={columns} dataSource={units} rowKey="id" /> },
    { 
      key: '2', label: 'Maintenance',
      children: (
        <List
          dataSource={maintenanceRecords}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<ToolOutlined />} />}
                title={item.issue}
                description={`Unit ${item.unit} - ${item.date}`}
              />
              <div className="text-right">
                <Tag color={item.status === 'Completed' ? 'green' : item.status === 'Pending' ? 'red' : 'orange'}>
                  {item.status}
                </Tag>
                <div>KES {item.cost.toLocaleString()}</div>
              </div>
            </List.Item>
          )}
        />
      )
    }
  ];

  return (
    <div className="p-6">
      {/* Property Header */}
      <Card className="mb-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Green Park Apartments</h1>
            <p className="text-gray-500">Westlands, Nairobi</p>
          </div>
          <Button type="primary">Edit Property</Button>
        </div>

        {/* Summary Stats */}
        <Row gutter={[16, 16]}>
          {summaryStats.map((stat, index) => (
            <Col span={6} key={index}>
              <Card>
                <div className="text-center">
                  {stat.icon}
                  <h3 className="text-lg font-medium">{stat.title}</h3>
                  <p className="text-xl font-bold">{stat.value}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      {/* Tabs Section */}
      <Card>
        <Tabs items={items} />
      </Card>
    </div>
  );
};

export default PropertyDetails;
