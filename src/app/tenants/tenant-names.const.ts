import { TenantCode } from "../helpers/tenant-code.enum";

export const TENANT_NAMES: Record<TenantCode, string> = {
    [TenantCode.Market]: 'Маркет',
    [TenantCode.PreliminaryOffer]: "Предварительные предложения (2323)",
    [TenantCode.Vitrina]: "Витрина поставщиков",
} 