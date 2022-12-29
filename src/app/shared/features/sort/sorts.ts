import { Sort } from "./sort.interface";

export const Sorts: Record<string, Sort> = {
    Relevance: {
        field: 'Relevance',
        title: 'По релевантности',
        queryParamValue: 'Relevance',
    },
    UnitePrice: {
        field: 'UnitePrice',
        title: 'По цене',
        queryParamValue: 'UnitePrice',
    },
    PublicationDate: {
        field: 'PublicationDate',
        title: 'По новизне',
        queryParamValue: 'PublicationDate',
    },
};