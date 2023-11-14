import UpdateUserInfoCardStyled from '@/components/Dashboard/UpdateUserInfoCard/styles';
import { Card } from 'antd';
import Title from 'antd/es/typography/Title';
import { Button, Form, Input } from 'antd';

const UpdateUserInfoCard = () => (
  <UpdateUserInfoCardStyled>
    <Card>
      <Title level={3}>Information</Title>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item label="Email" name="email">
          <Input defaultValue="tam2690@gmail.com" disabled={true} />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </Card>
  </UpdateUserInfoCardStyled>
);

export default UpdateUserInfoCard;
