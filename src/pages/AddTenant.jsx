import React, { useState } from 'react';
import { Form, Input, Select, DatePicker, Upload, Button, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const AddTenant = () => {
  const [form] = Form.useForm();

  const propertyTypes = [
    { value: 'bedsitter', label: 'Bedsitter' },
    { value: 'onebedroom', label: 'One Bedroom' },
    { value: 'twobedroom', label: 'Two Bedroom' },
    { value: 'threebedroom', label: 'Three Bedroom' }
  ];

  const properties = [
    { value: 'property1', label: 'Green Park Apartments' },
    { value: 'property2', label: 'Sunrise Heights' },
    { value: 'property3', label: 'Blue Waters Estate' }
  ];

  const onFinish = (values) => {
    console.log('Form values:', values);
    // Handle form submission here
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Card title="Add New Tenant" className="shadow-md">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark="optional"
        >
          {/* Property Selection */}
          <Form.Item
            name="property"
            label="Select Property"
            required
            rules={[{ required: true, message: 'Please select a property' }]}
          >
            <Select placeholder="Please Select">
              {properties.map(prop => (
                <Option key={prop.value} value={prop.value}>{prop.label}</Option>
              ))}
            </Select>
          </Form.Item>

          {/* Full Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="firstName"
              label="First Name"
              required
              rules={[{ required: true, message: 'Please enter first name' }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>

            <Form.Item
              name="lastName"
              label="Last Name"
              required
              rules={[{ required: true, message: 'Please enter last name' }]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </div>

          {/* Date of Birth */}
          <Form.Item
            name="dateOfBirth"
            label="Date of Birth"
            required
            rules={[{ required: true, message: 'Please select date of birth' }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="email"
              label="E-mail Address"
              rules={[{ type: 'email', message: 'Please enter valid email' }]}
            >
              <Input placeholder="example@example.com" />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              required
              rules={[{ required: true, message: 'Please enter phone number' }]}
            >
              <Input placeholder="Phone Number" />
            </Form.Item>
          </div>

          {/* ID and Photo Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="idNumber"
              label="ID Number"
              required
              rules={[{ required: true, message: 'Please enter ID number' }]}
            >
              <Input placeholder="National ID Number" />
            </Form.Item>

            <Form.Item
              name="photo"
              label="Photo"
              required
              rules={[{ required: true, message: 'Please upload a photo' }]}
            >
              <Upload maxCount={1}>
                <Button icon={<UploadOutlined />}>Upload Photo</Button>
              </Upload>
            </Form.Item>
          </div>

          {/* House Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="houseNumber"
              label="House Number"
              required
              rules={[{ required: true, message: 'Please enter house number' }]}
            >
              <Input placeholder="House Number" />
            </Form.Item>

            <Form.Item
              name="houseType"
              label="House Type"
              required
              rules={[{ required: true, message: 'Please select house type' }]}
            >
              <Select placeholder="Select House Type">
                {propertyTypes.map(type => (
                  <Option key={type.value} value={type.value}>{type.label}</Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          {/* Rent Amount */}
          <Form.Item
            name="rentAmount"
            label="Monthly Rent (KES)"
            required
            rules={[{ required: true, message: 'Please enter rent amount' }]}
          >
            <Input type="number" placeholder="Amount in KES" />
          </Form.Item>

          {/* Emergency Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="emergencyContactName"
              label="Emergency Contact Name"
              required
              rules={[{ required: true, message: 'Please enter emergency contact name' }]}
            >
              <Input placeholder="e.g Parent/Spouse" />
            </Form.Item>

            <Form.Item
              name="emergencyContactNumber"
              label="Emergency Contact Number"
              required
              rules={[{ required: true, message: 'Please enter emergency contact number' }]}
            >
              <Input placeholder="Emergency Contact Number" />
            </Form.Item>
          </div>

          {/* Permanent Address */}
          <Form.Item
            name="address"
            label="Permanent Address"
            required
            rules={[{ required: true, message: 'Please enter permanent address' }]}
          >
            <Input.TextArea rows={4} placeholder="Enter full address" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-600">
              Add Tenant
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AddTenant;
