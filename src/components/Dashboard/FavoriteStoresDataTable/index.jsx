import FavoriteStoresDataTableStyled from './styles';
import { Space, Table } from 'antd';
import { columns, data } from '@/data/FavoriteStoresDataTest';
import Column from 'antd/es/table/Column';
import { FaTrashCan } from 'react-icons/fa6';
import ConfirmModal from '@/components/Dashboard/common/ConfirmModal';
import { useState } from 'react';

const FavoriteStoresDataTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <FavoriteStoresDataTableStyled>
      <Table
        dataSource={data}
        pagination={{
          defaultPageSize: 10,
          position: ['topRight'],
          showSizeChanger: false,
        }}
        bordered={true}
      >
        {columns.map((item) => (
          <Column
            title={item.title}
            dataIndex={item.dataIndex}
            key={item.key}
            align={item.align}
            width={item.width}
          />
        ))}
        <Column
          title="Action"
          key="action"
          align="center"
          width={120}
          render={(_, record) => (
            <Space size="middle">
              <a>
                <FaTrashCan onClick={handleClick} />
              </a>
            </Space>
          )}
        />
      </Table>

      <ConfirmModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        title="Are you sure you want to delete this store from favorite list?"
        content="Coffee store's name"
        okText="Yes"
      />
    </FavoriteStoresDataTableStyled>
  );
};

export default FavoriteStoresDataTable;
