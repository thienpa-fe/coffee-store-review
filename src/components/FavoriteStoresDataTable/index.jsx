import FavoriteStoresDataTableStyled from './styles';
import { Table } from 'antd';
import { columns, data } from '@/data/FavoriteStoresDataTest';

const FavoriteStoresDataTable = () => (
  <FavoriteStoresDataTableStyled>
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        defaultPageSize: 10,
        position: ['topRight'],
      }}
      bordered={true}
    />
  </FavoriteStoresDataTableStyled>
);

export default FavoriteStoresDataTable;
