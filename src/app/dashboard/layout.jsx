'use client';

import DashboardSidebar from '@/components/Dashboard/containers/DashboardSidebar';
import { Col, Row } from 'antd';

const DashboardLayout = ({ children }) => (
  <div>
    <Row>
      <Col xl={5} lg={5} md={6} xs={6}>
        <DashboardSidebar />
      </Col>
      <Col xl={19} lg={19} md={18} xs={18}>
        {children}
      </Col>
    </Row>
  </div>
);

export default DashboardLayout;
