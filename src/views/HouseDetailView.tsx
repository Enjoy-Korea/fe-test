import HouseDetail from "@components/house/HouseDetail";
import House from "@model/House";
import { useGetHouseByIdQuery } from "@network/queries";
import { useRouter } from "next/router";

const HouseDetailView = () => {
    const { query } = useRouter();
    console.log(query);
    const { isLoading, data } = useGetHouseByIdQuery(Number(query.houseId));
    return <>{!isLoading && <HouseDetail item={data as House} />}</>;
};

export default HouseDetailView;
