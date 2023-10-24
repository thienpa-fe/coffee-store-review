import React from 'react';
import DashboardSidebarFooterStyled from './styles';
import SidebarFooterFunction from '../SidebarFooterFunction';
import { AiFillSetting, AiOutlineLogout } from 'react-icons/ai';

const DashboardSidebarFooter = () => (
  <DashboardSidebarFooterStyled>
    <SidebarFooterFunction
      functionIcon={<AiFillSetting />}
      content="Settings"
    />
    <SidebarFooterFunction
      functionIcon={<AiOutlineLogout />}
      content="Log Out"
    />
  </DashboardSidebarFooterStyled>
);

export default DashboardSidebarFooter;
