import Title from '../Title';
import DashboardSettingsStyled from './styles';
import { Select, Form } from 'antd';

const DashboardSettings = () => (
  <DashboardSettingsStyled>
    <Title content="Settings" />
    <Form.Item label="Theme">
      <Select
        showSearch
        style={{
          width: 300,
        }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '')
            .toLowerCase()
            .localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={[
          {
            value: '1',
            label: 'Defaut',
          },
          {
            value: '2',
            label: 'Closed',
          },
          {
            value: '3',
            label: 'Communicated',
          },
          {
            value: '4',
            label: 'Identified',
          },
          {
            value: '5',
            label: 'Resolved',
          },
          {
            value: '6',
            label: 'Cancelled',
          },
        ]}
      />
    </Form.Item>
  </DashboardSettingsStyled>
);
export default DashboardSettings;
