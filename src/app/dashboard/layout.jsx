'use client';

import DashboardSidebar from '@/components/Dashboard/containers/DashboardSidebar';
import { Col, Row } from 'antd';

const DashboardLayout = ({ children }) => (
  <div>
    <Row>
      <Col xxl={3} xl={5} lg={6} xs={5}>
        <DashboardSidebar />
      </Col>
      <Col xxl={21} xl={19} lg={18} xs={19}>
        {children}
      </Col>
    </Row>
  </div>
);

export default DashboardLayout;
