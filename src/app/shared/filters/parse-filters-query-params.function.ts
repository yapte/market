import { Params } from "@angular/router";
import { FilterTypeEnum } from "./filter-type.enum";
import { Filter } from "./filter.interface";
import { Filters } from "./filters";

export const parseFiltersQueryParams = (params: Params): any[] => {
    const filters = [
        {
            Name: "MarketSearchAction",
            ShortName: "t",
            Title: "Тип поиска",
            Type: 1,
            Value: 1,
        }
    ]
    const keys: string[] = Object.keys(params);
    Object.values(Filters).forEach(f => {
        if (keys.includes(f.queryParamName)) {
            filters.push(
                {
                    Name: f.fullName,
                    Type: f.type,
                    Value: parseFilterValue(f, params[f.queryParamName]), //params[f.queryParamName].split(','),

                    // TODO: deelte
                    ShortName: f.queryParamName,
                    // TODO: deelte
                    Title: f.title,
                }
            );
        }
    });
    return filters;
}

const parseFilterValue = (f: Filter, value: string): any => {
    
    if (f.queryParamName === 'smp') {
        return +value;
    }

    if (f.type === FilterTypeEnum.String) {
        return value.split(',');
    }
    if (f.type === FilterTypeEnum.Number) {
        return value.split(',').map((v: string) => +v); 
    }
    if (f.type === FilterTypeEnum.Boolean) {
        return value === 'true';
    }
    if (f.type === FilterTypeEnum.Date) {
        return value;
    }

}