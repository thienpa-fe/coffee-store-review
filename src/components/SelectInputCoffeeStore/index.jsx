import React from 'react';
import SelectInputCoffeeStoreStyled from './styles';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import storeDataTest from '@/data/StoresDataTest';

const SelectInputCoffeeStore = ({ isSelected, setIsSelected }) => {
  const handleSelect = () => {
    setIsSelected(true);
  };

  return (
    <SelectInputCoffeeStoreStyled>
      <Select
        onSelect={handleSelect}
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
