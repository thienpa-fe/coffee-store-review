import React from 'react';
import { Tabs } from 'antd';
import StatisticTabsStyled from './styles';
import CoffeeStoreStatistic from '../CoffeeStoreStatistic';
import ReviewsStatistic from '../ReviewsStatistic';
import ReactionsStatistic from '../ReactionsStatistic';

const StatisticTabs = () => {
  const statisticTabs = [
    { tabName: 'Coffee Store', data: <CoffeeStoreStatistic /> },
    { tabName: 'Reviews', data: <ReviewsStatistic /> },
    { tabName: 'Reactions', data: <ReactionsStatistic /> },
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
