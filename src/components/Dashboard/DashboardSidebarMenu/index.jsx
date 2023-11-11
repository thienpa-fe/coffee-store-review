import React, { useState } from 'react';
import { Menu } from 'antd';
import UserLoginInfo from '@/components/Dashboard/UserLoginInfo';
import { MdRateReview } from 'react-icons/md';
import { HiBuildingStorefront, HiMiniStar } from 'react-icons/hi2';
import { BsPersonCircle } from 'react-icons/bs';
import { LiaChartBar } from 'react-icons/lia';
import { FaShare } from 'react-icons/fa6';
import DashboardSidebarMenuStyled from '@/components/Dashboard/DashboardSidebarMenu/styles';
import Link from 'next/link';
import { AiFillSetting, AiOutlineLogout } from 'react-icons/ai';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(
    <Link href="/dashboard">My Stores</Link>,
    '1',
    <HiBuildingStorefront />,
  ),
  getItem(
    <Link href="/dashboard/favorite-stores">Favorite Store</Link>,
    '2',
    <HiMiniStar />,
  ),
  getItem(
    <Link href="/dashboard/reviews">Reviews</Link>,
    '3',
    <MdRateReview />,
  ),
  getItem(
    <Link href="/dashboard/my-profile">My Profile</Link>,
    '4',
    <BsPersonCircle />,
  ),
  getItem(
    <Link href="/dashboard/statistic">Statistic</Link>,
    '5',
    <LiaChartBar />,
  ),
  getItem(<Link href="/dashboard/share-url">Share</Link>, '6', <FaShare />),
  getItem(
    <Link href="/dashboard/settings">Settings</Link>,
    '/dashboard/settings',
    <AiFillSetting />,
  ),
];

const DashboardSidebarMenu = () => {
  const sharedStyle = { flex: '0 0 10px', height: 10 };
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('light');
  return (
    <DashboardSidebarMenuStyled>
      <div style={{ display: 'flex' }} className="menu-container">
        <div style={sharedStyle} />
        <div className="user-login-info">
          <UserLoginInfo />
        </div>
        <div style={sharedStyle} />
        <Menu
          style={{
            border: 0,
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={mode}
          theme={theme}
          items={items}
        />
      </div>
    </DashboardSidebarMenuStyled>
  );
};

export default DashboardSidebarMenu;
