import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/constants/color';

const Select = styled.select`
  padding: 0px 10px;
  height: 40px;
  color: ${colors.black};
  border: 1px solid ${colors.border};
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const SelectBox = ({ children, onChange, ...props }) => {
  return (
    <Select onChange={onChange} {...props}>
      {children}
    </Select>
  );
};

export default SelectBox;
