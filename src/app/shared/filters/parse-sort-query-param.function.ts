import { Params } from "@angular/router";
import { SortDirectionEnum } from "@shared/enums/sort-direction-enum";
import { SortFieldEnum } from "@shared/enums/sort-field-enum";

export const parseSortQueryParam = (params: Params): any => {
  const parsedSort = {
    field: SortFieldEnum.PublicationDate,
    title: 'По новизне',
    direction: SortDirectionEnum.Descending,
    active: true
  };

  let sortParam: string = params['sort'];

  if (sortParam) {
    const isAsc: boolean = sortParam.charAt(0) !== '-';
    if (isAsc) {
      parsedSort.direction = SortDirectionEnum.Ascending
    }
    parsedSort.field = sortParam.substring(isAsc ? 0 : 1) as SortFieldEnum;
  };

  return parsedSort;
}