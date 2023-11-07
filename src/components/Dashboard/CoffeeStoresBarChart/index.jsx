import CoffeeStoresBarChartStyled from './styles';
import { Card } from 'antd';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import coffeeStoresBarChartDataTest from '@/data/CoffeeStoresBarChartDataTest';

const CoffeeStoresBarChart = () => (
  <CoffeeStoresBarChartStyled>
    <Card>
      <ResponsiveContainer width="100%" height={550}>
        <BarChart
          data={coffeeStoresBarChartDataTest}
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
          <Bar dataKey="reviewNumber" fill="#8884d8" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  </CoffeeStoresBarChartStyled>
);

export default CoffeeStoresBarChart;
