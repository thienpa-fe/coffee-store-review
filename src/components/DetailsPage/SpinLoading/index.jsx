import SpinLoadingStyled from '@/components/DetailsPage/SpinLoading/styles';
import { Spin } from 'antd';

const SpinLoading = () => (
  <SpinLoadingStyled>
    <Spin tip="Loading" size="small"></Spin>
    <p className="content">Loading...</p>
  </SpinLoadingStyled>
);

export default SpinLoading;
