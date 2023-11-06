import Title from '@/components/Dashboard/common/Title';
import { Form, Select } from 'antd';
import DashboardSettingsContainerStyled from './styles';

const DashboardSettingsContainer = () => (
  <DashboardSettingsContainerStyled>
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
  </DashboardSettingsContainerStyled>
);
export default DashboardSettingsContainer;
