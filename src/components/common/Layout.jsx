import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  const StyledMain = styled.main`
    width: 100%;
    max-width: 1400px;
    padding: 20px 30px;
    margin: 0 auto;
  `;

  return <StyledMain>{children}</StyledMain>;
};

export default Layout;
