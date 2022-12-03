import House from "@model/House";
import Link from "next/link";
import styled from "styled-components";

const HouseItem = ({ item }: { item: House }) => {
    return (
        <Card>
            <Link href={`/house/${item.id}`}>
                <Container>
                    <Img
                        src={item.images[0].url}
                        onError={(event: any) => {
                            event.target.src = "https://e2states.com/wp-content/plugins/nimble-builder/assets/img/default-img.png";
                            event.onerror = null;
                        }}
                    />
                    <Content>
                        <Title>{item.name}</Title>

                        <ContentWrap>
                            <SubTitle>타입</SubTitle>
                            <Text>{item.houseType}</Text>
                        </ContentWrap>

                        <ContentWrap>
                            <SubTitle>학교</SubTitle>
                            <Text>{item.university}</Text>
                        </ContentWrap>

                        <ContentWrap>
                            <SubTitle>설명</SubTitle>
                            <Text>{item.description}</Text>
                        </ContentWrap>
                    </Content>
                </Container>
            </Link>
        </Card>
    );
};

export default HouseItem;

const Card = styled.div`
    width: 100%;
    border-radius: 5px;
    border: 1px solid #d1d1d1;
    box-sizing: border-box;
    margin-bottom: 30px;
    a {
        text-decoration: none;
        color: #111;
    }
`;

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

const Img = styled.img`
    object-fit: cover;
    aspect-ratio: 1/1;
    border-radius: 5px;
    height: 200px;
    margin-bottom: 10px;
`;

const Content = styled.div`
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h3`
    margin: 0;
`;

const SubTitle = styled.h5`
    margin: 1px 0 0 0;
    width: 10%;
`;

const ContentWrap = styled.div`
    display: flex;
    align-items: start;
`;

const Text = styled.p`
    margin: 0;
    font-size: 15px;
    width: 90%;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;
