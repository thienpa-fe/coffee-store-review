'use client';

import DashboardSidebar from '@/components/Dashboard/containers/DashboardSidebar';
import { Col, Row } from 'antd';

const DashboardLayout = ({ children }) => (
  <div>
    <Row>
      <Col xxl={4} xl={5} lg={6}>
        <DashboardSidebar />
      </Col>
      <Col xxl={20} xl={19} lg={18}>
        {children}
      </Col>
    </Row>
  </div>
);

export default DashboardLayout;
