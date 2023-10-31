import React from 'react';
import { Tabs } from 'antd';
import StatisticTabsStyled from './styles';

const StatisticTabs = () => (
  <StatisticTabsStyled>
    <Tabs
      type="card"
      items={['Coffee Store', 'Reviews', 'Reactions'].map((value, index) => ({
        label: `${value}`,
        key: index,
        children: `${value}`,
      }))}
    />
  </StatisticTabsStyled>
);
export default StatisticTabs;
