import React from 'react';
import { Tabs } from 'antd';
import StatisticTabsStyled from './styles';
import CoffeeStoreStatistic from '../CoffeeStoreStatistic';

const StatisticTabs = () => {
  const statisticTabs = [
    { tabName: 'Coffee Store', data: <CoffeeStoreStatistic /> },
    { tabName: 'Reviews', data: 'content reviews' },
    { tabName: 'Reactions', data: 'content Reactions' },
  ];

  return (
    <StatisticTabsStyled>
      <Tabs
        type="card"
        items={statisticTabs.map(({ tabName, data }, index) => ({
          label: tabName,
          key: index,
          children: data,
        }))}
      />
    </StatisticTabsStyled>
  );
};
export default StatisticTabs;
