import React from 'react';
import DashboardSidebarStyled from './styles';
import UserLoginInfo from '../UserLoginInfo';
import SidebarFunctionsList from '../SidebarFunctionList';
import DashboardSidebarFooter from '../DashboardSidebarFooter';

const DashboardSidebar = () => (
  <DashboardSidebarStyled>
    <UserLoginInfo />
    <SidebarFunctionsList />
    <DashboardSidebarFooter />
  </DashboardSidebarStyled>
);

export default DashboardSidebar;
