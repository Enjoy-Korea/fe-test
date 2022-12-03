import { ReactNode } from "react";
import styled from "styled-components";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return <LayoutContainer>{children}</LayoutContainer>;
};

const LayoutContainer = styled.section`
    max-width: 768px;
    margin: 0 auto;
    background: #ffffff;
    height: 100vh;
    position: relative;
`;

export default Layout;
