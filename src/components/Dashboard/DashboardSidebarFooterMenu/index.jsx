import { useState } from 'react';
import { Menu } from 'antd';
import { AiFillSetting, AiOutlineLogout } from 'react-icons/ai';
import Link from 'next/link';
import DashboardSidebarFooterMenuStyled from '@/components/Dashboard/DashboardSidebarFooterMenu/styles';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [getItem('Log Out', '/dashboard', <AiOutlineLogout />)];

const DashboardSidebarFooterMenu = () => {
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('light');
  return (
    <DashboardSidebarFooterMenuStyled>
      <div style={{ display: 'flex' }} className="menu-container">
        <Menu
          style={{
            border: 0,
          }}
          mode={mode}
          theme={theme}
          items={items}
        />
      </div>
    </DashboardSidebarFooterMenuStyled>
  );
};

export default DashboardSidebarFooterMenu;
