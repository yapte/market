import { SortDirection } from "./sort-direction.enum";

export interface Sort {
    // active: boolean;
    // direction: SortDirection;
    field: string;
    title: string;
    queryParamValue: string;
}