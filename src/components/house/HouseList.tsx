import House from "@model/House";
import HouseItem from "@components/house/HouseItem";

const HouseList = ({ list }: { list: House[] }) => {
    return (
        <>
            {list.map((item) => (
                <HouseItem item={item} key={item.id} />
            ))}
        </>
    );
};

export default HouseList;
