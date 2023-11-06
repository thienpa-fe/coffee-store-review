import React from 'react';
import DashboardSidebarStyled from './styles';
import SidebarFunctionsList from '../SidebarFunctionList';
import DashboardSidebarFooter from '../../DashboardSidebarFooter';
import UserLoginInfo from '../../UserLoginInfo';

const DashboardSidebar = () => (
  <DashboardSidebarStyled>
    <UserLoginInfo />
    <SidebarFunctionsList />
    <DashboardSidebarFooter />
  </DashboardSidebarStyled>
);

export default DashboardSidebar;
