import DashboardMyProfileContainerStyled from '@/components/Dashboard/containers/DashboardMyProfileContainer/styles';
import { Card } from 'antd';
import Title from 'antd/es/typography/Title';
// import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import UserInformationCard from '@/components/Dashboard/UserInfomationCard';
import UpdateUserInfoCard from '@/components/Dashboard/UpdateUserInfoCard';

const DashboardMyProfileContainer = () => (
  <DashboardMyProfileContainerStyled>
    <Title level={2}>My profile</Title>
    <UserInformationCard />
    <UpdateUserInfoCard />
  </DashboardMyProfileContainerStyled>
);

export default DashboardMyProfileContainer;
