import Link from "next/link";
import styled from "styled-components";

const NavigationBar = () => {
    return (
        <Container>
            <Navigation>
                <Link href="/house-list">
                    <Logo src="https://logo-image-bucket.s3.ap-northeast-2.amazonaws.com/enkorwithus.svg" />
                </Link>
            </Navigation>
        </Container>
    );
};

export default NavigationBar;

const Container = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    justify-content: center;
    top: 0;
    left: 0;
    zindex: 100;
`;

const Navigation = styled.section`
    width: 767px;
    height: 60px;
    background: #fff;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.04);
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
`;

const Logo = styled.img`
    display: inline-block;
    height: 30px;
`;
