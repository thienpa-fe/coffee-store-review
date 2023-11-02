import { Button, Table, ConfigProvider } from 'antd';
import MyStoresDataTableStyled from './styles';
import { Input, Space } from 'antd';
import { BsSearch } from 'react-icons/bs';
import { columns, data } from '@/data/MyStoresDataTest';

const MyStoresDataTable = () => (
  <MyStoresDataTableStyled>
    <div className="row-bar">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#14b4c8',
          },
        }}
      >
        <div className="search">
          <Space.Compact>
            <Input defaultValue="" placeholder="Search" />
          </Space.Compact>
          <BsSearch className="search-icon" />
        </div>
        <Space>
          <Button>+ Add new store</Button>
        </Space>
      </ConfigProvider>
    </div>
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        defaultPageSize: 10,
        position: ['topRight'],
        showSizeChanger: false,
      }}
      bordered={true}
    />
  </MyStoresDataTableStyled>
);

export default MyStoresDataTable;
