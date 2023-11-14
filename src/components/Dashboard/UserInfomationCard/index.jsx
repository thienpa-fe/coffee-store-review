import UserInformationCardStyled from '@/components/Dashboard/UserInfomationCard/styles';
import { Avatar, Button, Card, Image, Upload } from 'antd';
import Title from 'antd/es/typography/Title';
import { useState } from 'react';
import { BiSolidEdit } from 'react-icons/bi';
import { Typography } from 'antd';

const UserInformationCard = () => {
  const { Text } = Typography;

  return (
    <UserInformationCardStyled>
      <Card>
        <Avatar
          size={{ xs: 100, lg: 150, xl: 150, xxl: 150 }}
          src="https://tinnongmoingay365.files.wordpress.com/2017/07/nhung-buc-anh-anime-boy-chat-lu-lam-avatar.jpg?w=816"
        />
        <div>
          <Title level={2}>
            <span>Tam</span>
            <span> </span>
            <span>Phan</span>
            <Button>
              <BiSolidEdit className="edit-icon" />
            </Button>
          </Title>
          <Text type="secondary">Tam2690@gmail.com</Text>
        </div>
      </Card>
    </UserInformationCardStyled>
  );
};

export default UserInformationCard;
