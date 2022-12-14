export interface Org {
    id: number,
    guid: string,
    regNumber: string,
    name: string,
    fullName: string,
    inn: string,
    kpp: string,
    organizationCountry: number,
    organizationCountryName: string,
    organizationType: number,
    organizationStatus: number,
    contactPerson: string,
    isSMP: boolean,
    isCustomer: boolean,
    isSupplier: boolean,
    address: {
        id: number,
        fullAddress: string,
        fullPostAddress: string,
        okato: string,
        regionRF: string,
        postIndex: string,
        kladrCodeRegionRF: string,
        kladrNameRegionRF: string
    },
    ogrn: string,
    email: string,
}