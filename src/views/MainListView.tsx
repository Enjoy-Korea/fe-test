import HouseList from "@components/house/HouseList";
import SelectComponent from "@components/select";
import { useGetHouseListQuery } from "@network/queries";

const MainListView = () => {
    const { data: houseListQueryResult } = useGetHouseListQuery();
    console.log(houseListQueryResult);

    const houseTypeOptions =
        houseListQueryResult?.map((house) => ({ label: house.houseType, value: house.houseType })) || [];

    const universityOptions =
        houseListQueryResult?.map((house) => ({ label: house.university, value: house.university })) || [];

    const filterType = (type: string) => {
        console.log(type)
        if (type === "all") return [];
        if (type === "houseType") return houseTypeOptions;
        if (type === "houseType") return universityOptions;
    };

    return (
        <>
            <SelectComponent options={type} onChange={filterType} />
            <SelectComponent options={universityOptions} onChange={filterType} />
            <HouseList list={houseListQueryResult || []} />
        </>
    );
};

export default MainListView;

export const type = [
    { label: "all", value: "all" },
    { label: "houseType", value: "houseType" },
    { label: "university", value: "university" },
];
