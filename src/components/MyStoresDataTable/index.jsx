import { Button, Table } from 'antd';
import MyStoresDataTableStyled from './styles';
import { Input, Space } from 'antd';
import { BsSearch } from 'react-icons/bs';
import { columns, data } from '@/data/MyStoresDataTest';

const MyStoresDataTable = () => (
  <MyStoresDataTableStyled>
    <div className="row-bar">
      <div className="search">
        <Space.Compact>
          <Input defaultValue="" placeholder="Search" />
        </Space.Compact>
        <BsSearch className="search-icon" />
      </div>
      <Space wrap>
        <Button>+ Add new store</Button>
      </Space>
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
