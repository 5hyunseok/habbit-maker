import React, { useState } from 'react';
import { DatePicker, Input, Row, Card, Button, Form, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const { MonthPicker, RangePicker } = DatePicker;

function App(props) {
  const { getFieldDecorator, getFieldsValue } = props.form;
  return (
    <div className="App">
      {JSON.stringify(getFieldsValue())}
      <Form>
        <Row type="flex" justify="center" align="middle" style={{ height: '100%' }}>
          <Card className="Card">
            <h1>Title</h1>
            <Form.Item>
              {getFieldDecorator('title', {
                rules: [{
                  required: true,
                }],
              })(<Input size="large" name="title" placeholder="Title" />)}
            </Form.Item>
          </Card>
        </Row>
        <Row type="flex" justify="center" align="middle" style={{ height: '100%' }}>
          <Card className="Card">
            <h1>Cycle</h1>
            <Form.Item>
            <span className="ant-form-text"> Once in </span>
              {getFieldDecorator('cycle', {
                rules: [{
                  required: true,
                }],
                initialValue: 7
              })(<InputNumber size="large" name="cycle"  />)}
              <span className="ant-form-text"> days</span>
            </Form.Item>
          </Card>
        </Row>
        <Row type="flex" justify="center" align="middle" style={{ height: '100%' }}>
          <Card className="Card">
            <h1>From ~ To</h1>
            <Form.Item>
              {getFieldDecorator('range-picker', {
                rules: [{ type: 'array', required: true, message: 'Please select time!' }],
              })(<RangePicker />)}
            </Form.Item>
          </Card>
        </Row>
        <Row type="flex" justify="center" align="middle" style={{ height: '100%' }}>
          <Card className="Card">
            <h1>How to log</h1>
            <Form.Item>
              {getFieldDecorator('range-picker', {
                rules: [{ type: 'array', required: true, message: 'Please select time!' }],
              })(<RangePicker />)}
            </Form.Item>
          </Card>
        </Row>
      </Form>
    </div>
  );
}

const WrappedApp = Form.create({ name: 'app' })(App);

export default WrappedApp;
