
import { useQuery } from "@tanstack/react-query";
import apis from '@network/apis';
import QUERY_KEYS from '@network/queryKey';

export const useGetHouseListQuery = () => {
    return useQuery(QUERY_KEYS.getHouseListQueryKey(), () => apis.getHouseList(), {
        select: (response) => {
           console.log(response)
        },
    });
};

