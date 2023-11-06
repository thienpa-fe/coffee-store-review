import React from 'react';
import SelectInputCoffeeStoreStyled from './styles';
import { Select, Tabs } from 'antd';
import PropTypes from 'prop-types';
import storeDataTest from '@/data/StoresDataTest';

const SelectInputCoffeeStore = ({ isSelected, setIsSelected }) => {
  const handleSelect = () => {
    setIsSelected(true);
  };

  const handleClear = () => {
    setIsSelected(false);
  };

  return (
    <SelectInputCoffeeStoreStyled>
      <Select
        allowClear
        autoClearSearchValue
        onSelect={handleSelect}
        onClear={handleClear}
        showSearch
        style={{
          width: 200,
        }}
        placeholder="Choose a store to share..."
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '')
            .toLowerCase()
            .localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={storeDataTest}
      />
    </SelectInputCoffeeStoreStyled>
  );
};

SelectInputCoffeeStore.propTypes = {
  isSelected: PropTypes.bool,
  setIsSelected: PropTypes.func,
};

export default SelectInputCoffeeStore;
