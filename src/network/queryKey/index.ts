const QUERY_KEYS = {
    getHouseListQueryKey: () => ["house-list"],
    getHouseByIdQueryKey: (id: number) => ["house", { id }],
};
export default QUERY_KEYS;
