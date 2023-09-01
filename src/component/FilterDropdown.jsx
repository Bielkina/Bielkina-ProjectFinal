import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function FilterDropdown({ options, value, onSelectChange, placeholder }) {
  return (
    <Dropdown
      className='catalog__drop'
      options={options}
      onChange={onSelectChange}
      value={value}
      placeholder={placeholder}
    />
  );
}