import DashboardMyProfileContainerStyled from '@/components/Dashboard/containers/DashboardMyProfileContainer/styles';
import Title from 'antd/es/typography/Title';
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
