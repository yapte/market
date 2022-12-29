import { FilterTypeEnum } from "./filter-type.enum";
import { Filter } from "./filter.interface";

export const Filters: Record<string, Filter> = {
    // TODO: rename (check)
    IsImportPhaseout: {
        title: 'ИМПОРТОЗАМЕЩЕНИЕ',
        fullName: 'IsImportPhaseout',
        queryParamName: 'ImPh',
        type: FilterTypeEnum.Boolean,
    },

    SmpFilterState: {
        title: 'МСП',
        fullName: 'SmpFilterState',
        queryParamName: 'smp',
        type: FilterTypeEnum.Number, 
    },

    // TODO: rename
    InStock: {
        title: 'НАЛИЧИЕ',
        fullName: 'InStock',
        queryParamName: 'InStock',
        type: FilterTypeEnum.Number,
    },

    // TODO: rename
    Price: {
        title: 'ЦЕНА',
        fullName: 'Price',
        queryParamName: 'Price',
        type: FilterTypeEnum.Number,
    },

    Country: {
        title: 'СТРАНА',
        fullName: 'Country',
        queryParamName: 'Country',
        type: FilterTypeEnum.Number,
    },

    Statuses: {
        title: 'СТАТУС',
        fullName: 'Status',
        queryParamName: 'Status',
        type: FilterTypeEnum.Number,
    },

    CustomerOrganizer: {
        title: 'ПОКУПАТЕЛЬ / ОРГАНИЗАТОР',
        fullName: 'Organizations',
        queryParamName: 'orgs',
        type: FilterTypeEnum.String,
    },

    OrderId: {
        title: '№ ЗАКАЗА',
        fullName: 'TradeIds',
        queryParamName: 'id',
        type: FilterTypeEnum.Number,
    },

    DeliveryRegions: {
        title: 'РЕГИОНЫ ПОСТАВКИ',
        fullName: 'KladrCodeRegions',
        queryParamName: 'regs',
        type: FilterTypeEnum.String,
    },

    Okpd2Codes: {
        title: 'ОКПД2 КОДЫ',
        fullName: 'Okpd2Codes',
        queryParamName: 'okpd2s',
        type: FilterTypeEnum.String,
    },

    IsImmediate: {
        title: 'СРОЧНЫЙ ЗАКАЗ',
        fullName: 'IsImmediate',
        queryParamName: 'isImm',
        type: FilterTypeEnum.String,
    },

    PublicationDateFrom: {
        title: 'ДАТА ПУБЛИКАЦИИ ОТ',
        fullName: 'PublicationDateFrom',
        queryParamName: 'minPD',
        type: FilterTypeEnum.String,
    },

    PublicationDateTo: {
        title: 'ДАТА ПУБЛИКАЦИИ ДО',
        fullName: 'PublicationDateTo',
        queryParamName: 'maxPD',
        type: FilterTypeEnum.String,
    },
}