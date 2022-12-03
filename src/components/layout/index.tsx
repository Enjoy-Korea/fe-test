import { ReactNode } from "react";
import styled from "styled-components";
import NavigationBar from '@components/layout/NavigationBar';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <LayoutContainer>
                <NavigationBar />
                {children}
            </LayoutContainer>
        </>
    );
};

const LayoutContainer = styled.section`
    max-width: 768px;
    margin: 0 auto;
    padding-top: 60px;
    background: #ffffff;
    height: 100vh;
    position: relative;
`;

export default Layout;
