import House from "@model/House";
import styled from "styled-components";

const HouseItem = ({ item }: { item: House }) => {
    return (
        <Card>
            <Container>
                <Img src={item.images[0].url} />
                <Content>
                    <Title>{item.name}</Title>
                    <Text>{item.description}</Text>
                </Content>
            </Container>
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
    padding: 3px;
    box-sizing: border-box;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h3`
    margin: 20px 0 0 0;
`;

const Text = styled.p`
    margin: 0;
    font-size: 15px;
    /* font-weight: 700; */
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;
