import { FilterTypeEnum } from "./filter-type.enum";

export interface Filter {
    queryParamName: string;
    fullName: string;
    title: string;
    type: FilterTypeEnum;
    // value: (string | number | boolean)[];
}