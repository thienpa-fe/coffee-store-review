import UserInformationCardStyled from '@/components/Dashboard/UserInfomationCard/styles';
import { Avatar, Card } from 'antd';
import Title from 'antd/es/typography/Title';
import { useState } from 'react';
import { Typography } from 'antd';

const UserInformationCard = () => {
  const { Text } = Typography;
  const [editFullName, setEditFullName] = useState('Tam Phan');

  return (
    <UserInformationCardStyled>
      <Card>
        <Avatar
          size={{ xs: 100, lg: 150, xl: 150, xxl: 150 }}
          src="https://tinnongmoingay365.files.wordpress.com/2017/07/nhung-buc-anh-anime-boy-chat-lu-lam-avatar.jpg?w=816"
        />
        <div>
          <Title
            editable={{
              onChange: setEditFullName,
            }}
            level={2}
          >
            {editFullName}
          </Title>
          <Text type="secondary">Tam2690@gmail.com</Text>
        </div>
      </Card>
    </UserInformationCardStyled>
  );
};

export default UserInformationCard;
