import { IItem } from "../interfaces/itemInterface";
import { selectedSortingOptionType } from "../types/itemSortingOptionType";

export const sortItem = (
  itemList: IItem[],
  sortingOption: selectedSortingOptionType,
  isSortByASC: boolean
) =>
  itemList.sort((a, b) => {
    if (a[sortingOption] > b[sortingOption]) {
      return isSortByASC ? 1 : -1;
    } else if (a[sortingOption] < b[sortingOption]) {
      return isSortByASC ? -1 : 1;
    } else {
      return 0;
    }
  });
