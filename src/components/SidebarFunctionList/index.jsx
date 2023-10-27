import React from 'react';
import SidebarFunctionsListStyled from './styles';
import SidebarFunction from '../SidebarFunction';
import { HiBuildingStorefront, HiMiniStar } from 'react-icons/hi2';
import { MdRateReview } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';
import { LiaChartBar } from 'react-icons/lia';
import { FaShare } from 'react-icons/fa6';

const SidebarFunctionsList = () => (
  <SidebarFunctionsListStyled>
    <SidebarFunction
      functionIcon={<HiBuildingStorefront />}
      content="My Stores"
    />
    <SidebarFunction functionIcon={<HiMiniStar />} content="Favorite Stores" />
    <SidebarFunction functionIcon={<MdRateReview />} content="Reviews" />
    <SidebarFunction functionIcon={<BsPersonCircle />} content="My Profile" />
    <SidebarFunction functionIcon={<LiaChartBar />} content="Statistic" />
    <SidebarFunction functionIcon={<FaShare />} content="Share" />
  </SidebarFunctionsListStyled>
);

export default SidebarFunctionsList;
