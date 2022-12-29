import { Params } from "@angular/router";
import { SortDirection } from "./sort-direction.enum";

export const parseSortQueryParam = (params: Params): any => {
  const parsedSort = {
    field: 'PublicationDate',
    title: 'По новизне',
    direction: SortDirection.Descending,
    active: true
  };

  let sortParam: string = params['sort'];

  if (sortParam) {
    const isAsc: boolean = sortParam.charAt(0) !== '-';
    if (isAsc) {
      parsedSort.direction = SortDirection.Ascending
    }
    parsedSort.field = sortParam.substring(isAsc ? 0 : 1);
  };

  return parsedSort;
}