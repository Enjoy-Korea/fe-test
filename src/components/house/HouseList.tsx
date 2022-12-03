import House from "@model/House";
import HouseItem from "@components/house/HouseItem";
import styled from "styled-components";

const HouseList = ({ list }: { list: House[] }) => {
    return (
        <Container>
            {list.map((item) => (
                <HouseItem item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default HouseList;

const Container = styled.div`
    padding-bottom: 50px;
`;
