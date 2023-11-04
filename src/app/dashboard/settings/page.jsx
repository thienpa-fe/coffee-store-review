'use client';

import DashboardSettings from '@/components/DashboardSettings';
import SettingsStyled from './styles';
import DashboardSidebar from '@/components/DashboardSidebar';

const Settings = () => (
  <SettingsStyled>
    <DashboardSidebar />
    <DashboardSettings />
  </SettingsStyled>
);

export default Settings;
