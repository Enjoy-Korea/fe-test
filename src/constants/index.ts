export type OptionsType = { label: string; value: string };

export type sortOptionType = {
    type: string;
    options: OptionsType[];
};

export const CATEGORY = {
    ALL: "all",
    HOUSE_TYPE: "houseType",
    UNIVERSITY: "university",
};

export const typeOptions = [
    { label: CATEGORY.ALL, value: CATEGORY.ALL },
    { label: CATEGORY.HOUSE_TYPE, value: CATEGORY.HOUSE_TYPE },
    { label: CATEGORY.UNIVERSITY, value: CATEGORY.UNIVERSITY },
];
