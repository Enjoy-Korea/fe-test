import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../styles/constants/color';

const StyledButton = styled.button`
  font-size: ${(props) => `${props.size}px`};
  background-color: ${(props) => props.theme};
  padding: 8px 16px;
  color: ${colors.white};
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    css`
      background-color: ${colors.blue};
    `}

  &:hover {
    opacity: 0.9;
  }
`;

const Button = ({
  children,
  size = 18,
  theme = colors.lightGray,
  onClick,
  ...props
}) => {
  return (
    <StyledButton size={size} theme={theme} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
