import React from 'react';
import { Card, Row, Col, Button, Table, Tag, Progress, Tabs, List, Avatar } from 'antd';
import { HomeOutlined, UserOutlined, DollarOutlined, ToolOutlined } from '@ant-design/icons';

const PropertyDetails = () => {
  // Mock data for units
  const units = [
    {
      id: '1',
      unitNo: 'A1',
      type: '2BHK',
      tenant: 'John Kamau',
      rentAmount: 25000,
      status: 'Occupied',
      lastPayment: '2024-03-01',
      dueDate: '2024-04-01'
    },
    {
      id: '2',
      unitNo: 'A2',
      type: '1BHK',
      tenant: null,
      rentAmount: 15000,
      status: 'Vacant',
      lastPayment: null,
      dueDate: null
    },
    // Add more units...
  ];

  // Mock data for maintenance records
  const maintenanceRecords = [
    {
      id: '1',
      date: '2024-03-15',
      issue: 'Plumbing repair',
      unit: 'A1',
      cost: 5000,
      status: 'Completed'
    },
    // Add more records...
  ];

  const columns = [
    {
      title: 'Unit No',
      dataIndex: 'unitNo',
      key: 'unitNo',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Tenant',
      dataIndex: 'tenant',
      key: 'tenant',
      render: (tenant) => tenant || 'Vacant'
    },
    {
      title: 'Rent Amount',
      dataIndex: 'rentAmount',
      key: 'rentAmount',
      render: (amount) => `KES ${amount.toLocaleString()}`
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'Occupied' ? 'green' : 'red'}>
          {status}
        </Tag>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button type="link">View Details</Button>
      )
    }
  ];

  const items = [
    {
      key: '1',
      label: 'Units',
      children: <Table columns={columns} dataSource={units} />
    },
    {
      key: '2',
      label: 'Maintenance',
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
              <div>
                <Tag color={item.status === 'Completed' ? 'green' : 'orange'}>
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
      <Card className="mb-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Green Park Apartments</h1>
            <p className="text-gray-500">Westlands, Nairobi</p>
          </div>
          <Button type="primary">Edit Property</Button>
        </div>

        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Card>
              <div className="text-center">
                <HomeOutlined className="text-3xl text-blue-500 mb-2" />
                <h3 className="text-lg font-medium">Total Units</h3>
                <p className="text-2xl font-bold">20</p>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <div className="text-center">
                <UserOutlined className="text-3xl text-green-500 mb-2" />
                <h3 className="text-lg font-medium">Occupancy</h3>
                <Progress type="circle" percent={90} width={80} />
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <div className="text-center">
                <DollarOutlined className="text-3xl text-yellow-500 mb-2" />
                <h3 className="text-lg font-medium">Revenue</h3>
                <p className="text-2xl font-bold">KES 450,000</p>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <div className="text-center">
                <ToolOutlined className="text-3xl text-red-500 mb-2" />
                <h3 className="text-lg font-medium">Maintenance</h3>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-gray-500">Pending requests</p>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>

      <Card>
        <Tabs items={items} />
      </Card>
    </div>
  );
};

export default PropertyDetails;
