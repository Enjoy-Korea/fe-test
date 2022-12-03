
import { useQuery } from "@tanstack/react-query";
import apis from '@network/apis';
import QUERY_KEYS from '@network/queryKey';
import House from '@model/House';

export const useGetHouseListQuery = () => {
    return useQuery(QUERY_KEYS.getHouseListQueryKey(), () => apis.getHouseList(), {
        select: (response) => {
            const sortedData = response.sort((a, b) => a.id - b.id);
            return sortedData.map((data) => House.create(data));
        }
    });
};

