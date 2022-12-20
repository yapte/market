import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { TenantCode } from "src/app/helpers/tenant-code.enum";

export class TradeFormGenerator {
    static generateForm(tenantCode: TenantCode): FormGroup {
        return new FormGroup({
            main: new FormGroup({
                tradeName: new FormControl('', [Validators.required]),
                description: new FormControl(),
                smsp: new FormControl(),
                isImportPhaseout: new FormControl(),
                isOnlySmp: new FormControl(),
                tradeDocuments: new FormControl(),
                isSendToEis: new FormControl(),
                workGroupIds: new FormControl(),
            }),
            items: new FormGroup({
                products: new FormArray([
                    this.generateProductFormItem(tenantCode),
                ]),
                conditionsOfVat: new FormControl(),
                initialPriceWithoutVat: new FormControl(),
                isManualEnterPriceForEachProduct: new FormControl(),
                initialPriceWithVat: new FormControl(),
                rateVat: new FormControl({ value: null, disabled: true }),
                isLotPriceWithVat: new FormControl(false),
            }),
            details: new FormGroup({
                deliveryRegion: new FormControl(),
                deliveryPlace: new FormControl(),
                deliveryTerms: new FormControl(),
                kladrRegionCode: new FormControl(),
                kladrRegionCodes: new FormControl(),
                isContractInElectronicForm: new FormControl(true),
                conditionsOfPayment: new FormControl(),
                isImmediate: new FormControl(),
                fillingApplicationEndDate: new FormControl(),
                planedDealSignDate: new FormControl(),
                contactInfo: new FormGroup({
                    fio: new FormControl('', [Validators.required]),
                    contactPhone: new FormControl(),
                    contactPhoneTail: new FormControl(),
                    contactEmail: new FormControl(),
                }),
                minQuantityOfDeliveredGoods: new FormControl(),
                characteristicFileGuid: new FormControl(),
                invitedOrganizationIds: new FormControl(),
            }),
            invitation: new FormGroup({
                invitations: new FormControl([]),
                invitationMethod: new FormControl(1),
                isHideApplication: new FormControl(),

                invitationRegions: new FormControl([]),
                invitationTags: new FormControl([]),
            }),
            eisInfo: new FormGroup({
                oosPurchaseMethodCode: new FormControl(),
                notDishonest: new FormControl(),
                isEmergency: new FormControl(),
                applicationRequestOrder: new FormControl(),
                resultsReviewOrder: new FormControl(),
                planRegistrationNumber: new FormControl(),
                planPositionNumber: new FormControl(),
                isSupplierCanCreateContract: new FormControl(),
            }),
        });
    }

    static generateProductFormItem(tenantCode: TenantCode, isManualInput = false): FormGroup {
        return new FormGroup({
            id: new FormControl(),
            name: new FormControl(),
            quantity: new FormControl(),
            okeiObject: new FormControl(),
            classificatorCode: new FormControl(),
            price: new FormControl({ value: null, disabled: !isManualInput }),
            sum: new FormControl(),
            classificatorType: new FormControl(),
            classificatorDescription: new FormControl(),
            type: new FormControl(),
            vatRate: new FormControl(),
            sumVat: new FormControl(),
            mark: new FormControl(),
            parameters: new FormControl(),
            gost: new FormControl(),
            description: new FormControl(),
            okved2Code: new FormControl(),
            shortOkeiName: new FormControl(),
            okpd2Codes: new FormControl(null, tenantCode === TenantCode.PreliminaryOffer ? [Validators.required] : []),
            userDictionaryPositionNumber: new FormControl(),
            userDictionaryPositionName: new FormControl(),
        });
    }


}