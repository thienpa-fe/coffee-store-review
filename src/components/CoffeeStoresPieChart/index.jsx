import React, { useCallback, useState } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import CoffeeStoresPieChartStyled from './styles';
import { Card } from 'antd';
import coffeeStoresPieChartDataTest from '@/data/CoffeeStoresPieChartDataTest';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CoffeeStoresPieChart = () => (
  <CoffeeStoresPieChartStyled>
    <Card>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={coffeeStoresPieChartDataTest}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={140}
            fill="#8884d8"
            dataKey="value"
          >
            {coffeeStoresPieChartDataTest.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  </CoffeeStoresPieChartStyled>
);

export default CoffeeStoresPieChart;
