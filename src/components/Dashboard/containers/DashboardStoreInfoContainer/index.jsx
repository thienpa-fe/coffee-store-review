import DashboardStoreInfoContainerStyled from '@/components/Dashboard/containers/DashboardStoreInfoContainer/styles';
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Slider,
  Switch,
  TimePicker,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';

const DashboardStoreInfoContainer = ({ okBtnText }) => {
  const format = 'HH:mm';

  const [inputMinValue, setInputMinValue] = useState(5000);
  const [inputMaxValue, setInputMaxValue] = useState(20000);

  const onChangeMinPrice = (newValue) => {
    setInputMinValue(newValue);
  };

  const onChangeMaxPrice = (newValue) => {
    setInputMaxValue(newValue);
  };

  return (
    <DashboardStoreInfoContainerStyled>
      <Form
        name="basic"
        labelCol={{
          xxl: { span: 6 },
          xl: { span: 5 },
          lg: { span: 5 },
          xs: { span: 10 },
        }}
        wrapperCol={{
          xxl: { span: 18 },
          xl: { span: 19 },
          lg: { span: 19 },
          xs: { span: 14 },
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Store name"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input store name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: 'Please input store address!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Open at" name="open-at">
          <TimePicker format={format} />
        </Form.Item>

        <Form.Item label="Close at" name="close-at">
          <TimePicker format={format} />
        </Form.Item>

        <Form.Item label="Price" name="price">
          <Row>
            <Col xxl={12} xl={12} lg={12} xs={24}>
              <Slider
                min={5000}
                max={50000}
                onChange={onChangeMinPrice}
                value={typeof inputMinValue === 'number' ? inputMinValue : 5000}
                step={1000}
              />
            </Col>
            <Col xxl={12} xl={12} lg={12} xs={24} className="input-number-col">
              <InputNumber
                min={5000}
                max={50000}
                value={inputMinValue}
                onChange={onChangeMinPrice}
                step={1000}
              />
            </Col>
          </Row>
          <Row>
            <Col xxl={12} xl={12} lg={12} xs={24}>
              <Slider
                min={20000}
                max={200000}
                onChange={onChangeMaxPrice}
                value={
                  typeof inputMaxValue === 'number' ? inputMaxValue : 20000
                }
                step={1000}
              />
            </Col>
            <Col xxl={12} xl={12} lg={12} xs={24} className="input-number-col">
              <InputNumber
                min={20000}
                max={200000}
                value={inputMaxValue}
                onChange={onChangeMaxPrice}
                step={1000}
              />
            </Col>
          </Row>
        </Form.Item>

        <Row>
          <Col xxl={12} xl={12} lg={12}>
            <Form.Item label="Review" name="review">
              <Switch defaultChecked className="toggle" />
            </Form.Item>
          </Col>

          <Col xxl={12} xl={12} lg={12}>
            <Form.Item label="Reaction" name="reaction">
              <Switch defaultChecked className="toggle" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Descriptions" name="descriptions">
          <TextArea
            rows={5}
            placeholder="Maximum 200 characters"
            maxLength={200}
          />
        </Form.Item>

        <Row>
          <Col xxl={6} xl={5} lg={5} xs={0}></Col>
          <Col xxl={18} xl={19} lg={19} xs={24} className="actions-bar">
            <Button type="primary" htmlType="submit" className="form-btn">
              {okBtnText}
            </Button>
            <Button className="form-btn">Cancel</Button>
          </Col>
        </Row>
      </Form>
    </DashboardStoreInfoContainerStyled>
  );
};

export default DashboardStoreInfoContainer;
