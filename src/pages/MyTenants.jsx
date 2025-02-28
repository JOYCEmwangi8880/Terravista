import React from 'react';
import { Table, Card, Input, Button, Tag, Avatar } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const MyTenants = () => {
  
  const tenants = [
    {
      id: '1',
      name: 'Amelia Kimani',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
      houseNo: 'A4',
      houseType: '2BHK',
      moveInDate: '23 May 2020',
      rentStatus: 'Paid',
      phoneNumber: '+254 712 345 678',
    },
    {
      id: '2',
      name: 'James Makau',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      houseNo: 'B2',
      houseType: '1BHK',
      moveInDate: '2 May 2020',
      rentStatus: 'Pending',
      phoneNumber: '+254 723 456 789',
    },
    {
      id: '3',
      name: 'Gladys Wanjiru',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
      houseNo: 'A7',
      houseType: '2BHK',
      moveInDate: '23 Mar 2019',
      rentStatus: 'Paid',
      phoneNumber: '+254 734 567 890',
    },
    {
      id: '4',
      name: 'Eric Nduku',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      houseNo: 'C1',
      houseType: '4BHK',
      moveInDate: '12 Mar 2019',
      rentStatus: 'Pending',
      phoneNumber: '+254 745 678 901',
    },
    {
      id: '5',
      name: 'Maggi Kimani',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
      houseNo: 'B5',
      houseType: '3BHK',
      moveInDate: '6 May 2020',
      rentStatus: 'Paid',
      phoneNumber: '+254 756 789 012',
    },
    {
      id: '6',
      name: 'John Kamau',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      houseNo: 'D3',
      houseType: '2BHK',
      moveInDate: '15 Jun 2020',
      rentStatus: 'Paid',
      phoneNumber: '+254 767 890 123',
    },
    {
      id: '7',
      name: 'Sarah Muthoni',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
      houseNo: 'E2',
      houseType: '1BHK',
      moveInDate: '8 Jul 2020',
      rentStatus: 'Pending',
      phoneNumber: '+254 778 901 234',
    },
    {
      id: '8',
      name: 'Peter Ochieng',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      houseNo: 'F1',
      houseType: '3BHK',
      moveInDate: '20 Aug 2020',
      rentStatus: 'Paid',
      phoneNumber: '+254 789 012 345',
    },
    {
      id: '9',
      name: 'Lucy Wairimu',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
      houseNo: 'G4',
      houseType: '2BHK',
      moveInDate: '3 Sep 2020',
      rentStatus: 'Pending',
      phoneNumber: '+254 790 123 456',
    },
    {
      id: '10',
      name: 'David Mwangi',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      houseNo: 'H2',
      houseType: '4BHK',
      moveInDate: '12 Oct 2020',
      rentStatus: 'Paid',
      phoneNumber: '+254 701 234 567',
    },
    {
      id: '11',
      name: 'Joyce Mwangi',
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
      houseNo: 'H2',
      houseType: '4BHK',
      moveInDate: '12 Oct 2020',
      rentStatus: 'Paid',
      phoneNumber: '+254 701 234 567',
    }
  ];

  const columns = [
    {
      title: 'Tenant',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div className="flex items-center space-x-3">
          <Avatar src={record.avatar} icon={<UserOutlined />} />
          <div>
            <div className="font-medium">{text}</div>
            <div className="text-gray-500 text-sm">{record.phoneNumber}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'House Details',
      dataIndex: 'houseNo',
      key: 'houseNo',
      render: (text, record) => (
        <div>
          <div className="font-medium">House No: {text}</div>
          <div className="text-gray-500 text-sm">{record.houseType}</div>
        </div>
      ),
    },
    {
      title: 'Move In Date',
      dataIndex: 'moveInDate',
      key: 'moveInDate',
    },
    {
      title: 'Rent Status',
      dataIndex: 'rentStatus',
      key: 'rentStatus',
      render: (status) => (
        <Tag color={status === 'Paid' ? 'green' : 'red'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Link to={`/tenant-info/${record.id}`}>
          <Button type="primary" className="bg-blue-500 hover:bg-blue-600">
            View Details
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <div className="p-6">
      <Card className="shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Tenants</h1>
          <div className="flex items-center space-x-4">
            <Input
              placeholder="Search tenants..."
              prefix={<SearchOutlined className="text-gray-400" />}
              className="w-64"
            />
            <div className="bg-gray-100 px-3 py-1 rounded-lg">
              <span className="text-gray-600">Total Tenants: {tenants.length}</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card className="bg-blue-50">
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600">{tenants.length}</h3>
              <p className="text-gray-600">Total Tenants</p>
            </div>
          </Card>
          <Card className="bg-green-50">
            <div className="text-center">
              <h3 className="text-xl font-bold text-green-600">
                {tenants.filter(t => t.rentStatus === 'Paid').length}
              </h3>
              <p className="text-gray-600">Paid Rent</p>
            </div>
          </Card>
          <Card className="bg-red-50">
            <div className="text-center">
              <h3 className="text-xl font-bold text-red-600">
                {tenants.filter(t => t.rentStatus === 'Pending').length}
              </h3>
              <p className="text-gray-600">Pending Rent</p>
            </div>
          </Card>
          <Card className="bg-yellow-50">
            <div className="text-center">
              <h3 className="text-xl font-bold text-yellow-600">5</h3>
              <p className="text-gray-600">Vacant Units</p>
            </div>
          </Card>
        </div>

        {/* Tenants Table */}
        <Table
          columns={columns}
          dataSource={tenants}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} tenants`
          }}
        />
      </Card>
    </div>
  );
};

export default MyTenants;
