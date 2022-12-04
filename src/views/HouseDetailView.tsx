import { useRouter } from "next/router";
import HouseDetail from "@components/house/HouseDetail";
import House from "@model/House";
import { useGetHouseByIdQuery } from "@network/queries";

const HouseDetailView = () => {
    const { query } = useRouter();
    const { isLoading, data } = useGetHouseByIdQuery(Number(query.houseId));
    return <>{!isLoading && <HouseDetail item={data as House} />}</>;
};

export default HouseDetailView;
