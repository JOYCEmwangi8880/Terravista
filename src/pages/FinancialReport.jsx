import React from 'react';
import { Card, Row, Col, Table, DatePicker, Button, Select, Progress } from 'antd';
import { DownloadOutlined, DollarOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const { Option } = Select;

const FinancialReports = () => {
  // Mock data for financial transactions
  const transactions = [
    {
      id: '1',
      date: '2024-03-01',
      property: 'Green Park Apartments',
      unit: 'A1',
      type: 'Rent',
      amount: 25000,
      status: 'Received'
    },
    {
      id: '2',
      date: '2024-03-02',
      property: 'Sunrise Heights',
      unit: 'B2',
      type: 'Maintenance',
      amount: -5000,
      status: 'Paid'
    },
    // Add more transactions...
  ];

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Property',
      dataIndex: 'property',
      key: 'property',
    },
    {
      title: 'Unit',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => (
        <span className={amount > 0 ? 'text-green-600' : 'text-red-600'}>
          KES {Math.abs(amount).toLocaleString()}
        </span>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    }
  ];

  return (
    <div className="p-6">
      <Card className="mb-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Financial Reports</h1>
          <div className="flex space-x-4">
            <RangePicker />
            <Select defaultValue="all" style={{ width: 120 }}>
              <Option value="all">All Properties</Option>
              <Option value="greenpark">Green Park</Option>
              <Option value="sunrise">Sunrise Heights</Option>
            </Select>
            <Button icon={<DownloadOutlined />}>Export</Button>
          </div>
        </div>

        <Row gutter={[16, 16]} className="mb-6">
          <Col span={6}>
            <Card>
              <div>
                <h3 className="text-gray-500">Total Revenue</h3>
                <p className="text-2xl font-bold">KES 1,250,000</p>
                <Progress percent={85} showInfo={false} />
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <div>
                <h3 className="text-gray-500">Expenses</h3>
                <p className="text-2xl font-bold">KES 150,000</p>
                <Progress percent={25} showInfo={false} status="exception" />
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <div>
                <h3 className="text-gray-500">Outstanding</h3>
                <p className="text-2xl font-bold">KES 75,000</p>
                <Progress percent={15} showInfo={false} status="active" />
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <div>
                <h3 className="text-gray-500">Net Income</h3>
                <p className="text-2xl font-bold">KES 1,100,000</p>
                <div className="flex items-center text-green-600">
                  <ArrowUpOutlined />
                  <span>12% from last month</span>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Table 
          columns={columns} 
          dataSource={transactions}
          title={() => 'Transaction History'}
          summary={pageData => {
            const total = pageData.reduce((acc, curr) => acc + curr.amount, 0);
            return (
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={4}>Total</Table.Summary.Cell>
                <Table.Summary.Cell index={1}>
                  <span className={total > 0 ? 'text-green-600' : 'text-red-600'}>
                    KES {Math.abs(total).toLocaleString()}
                  </span>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2} />
              </Table.Summary.Row>
            );
          }}
        />
      </Card>
    </div>
  );
};

export default FinancialReports;
