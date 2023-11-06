import React, { PureComponent } from 'react';
import CitysBarChartStyled from './styles';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import citysBarChartDataTest from '@/data/CitysBarChartDataTest';
import { Card } from 'antd';

const CitysBarChart = () => (
  <CitysBarChartStyled>
    <Card>
      <ResponsiveContainer width="100%" height={550}>
        <BarChart
          data={citysBarChartDataTest}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="coffeeStoreNumber" fill="#8884d8" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  </CitysBarChartStyled>
);

export default CitysBarChart;
