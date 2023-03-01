import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-pps-page',
  templateUrl: './pps-page.component.html',
  styleUrls: ['./pps-page.component.scss']
})
export class PpsPageComponent {
  products: any[] = PRODUCTS;


  selectedView: number = 1;
  selectedSum: number = 10;
  viewItems: SelectItem[] = [
    { label: 'по поставщикам', value: 0 },
    { label: 'по позициям', value: 1 },
  ];
  sumItems: SelectItem[] = [
    { label: 'с НДС', value: 10 },
    { label: 'без НДС', value: 11 },
  ];
}


const OFFERS = [
  [
    {
      discussionId: 74904,
      id: 113462,
      isChatEnabled: true,
      isPriceWithVat: false,
      lotItemId: 419283,
      meetsRequirements: 5,
      incomplianceReason: '',
      okModel: {
        Inn: '43587894',
        OrganizationGuid: 'dhfgdfg',
        Color: 'green',
        Reasons: Array(0),
      },
      organizationGuid: 'fbeb78b6-7ec2-422f-98a3-7e885d0b1dbf',
      organizationId: '',
      organizationName: 'Первый поставщик Болдырев',
      participantOfferId: 1116519,
      participantOfferPublishDate: '2022-12-13T07:21:16',
      price: 333,
      priceWithVat: 333 * 1.2,
      taxPercen: 10,
      isBestPrice: false,
    },
  ],
  [
    {
      discussionId: 74905,
      id: 113463,
      isChatEnabled: true,
      isPriceWithVat: false,
      lotItemId: 419283,
      meetsRequirements: 5,
      incomplianceReason: null,
      okModel: {
        Inn: '43587894',
        OrganizationGuid: 'dhfgdfg',
        Color: 'green',
        Reasons: Array(0),
      },
      organizationGuid: 'b0bb43dc-72cd-47d1-a5f2-106a802249ec',
      organizationId: undefined,
      organizationName: 'ООО Поставщик 2.06.08',
      participantOfferId: 1116521,
      participantOfferPublishDate: '2022-12-13T07:35:58',
      price: 888,
      priceWithVat: null,
      taxPercen: undefined,
      isBestPrice: false,
    },

    {
      discussionId: 74905,
      id: 113464,
      isChatEnabled: true,
      isPriceWithVat: false,
      lotItemId: 419284,
      meetsRequirements: 5,
      incomplianceReason: null,
      okModel: {
        Inn: '43587894',
        OrganizationGuid: 'dhfgdfg',
        Color: 'green',
        Reasons: Array(0),
      },
      organizationGuid: 'b0bb43dc-72cd-47d1-a5f2-106a802249ec',
      organizationId: undefined,
      organizationName: 'ООО Поставщик 2.06.08',
      participantOfferId: 1113326,
      participantOfferPublishDate: '2022-11-10T06:55:32',
      price: 525000,
      priceWithVat: null,
      taxPercen: undefined,
      isBestPrice: false,
    },
    {
      discussionId: 74905,
      id: 113465,
      isChatEnabled: true,
      isPriceWithVat: false,
      lotItemId: 419284,
      meetsRequirements: 5,
      incomplianceReason: null,
      okModel: {
        Inn: '43587894',
        OrganizationGuid: 'dhfgdfg',
        Color: 'green',
        Reasons: Array(0),
      },
      organizationGuid: 'b0bb43dc-72cd-47d1-a5f2-106a802249ec',
      organizationId: undefined,
      organizationName: 'ООО Поставщик 2.06.08',
      participantOfferId: 1113326,
      participantOfferPublishDate: '2022-11-10T06:55:32',
      price: 525000,
      priceWithVat: null,
      taxPercen: undefined,
      isBestPrice: false,
    },
  ],
  [
    {
      discussionId: 74904,
      id: 113466,
      isChatEnabled: true,
      isPriceWithVat: false,
      lotItemId: 419283,
      meetsRequirements: 5,
      incomplianceReason: null,
      okModel: {
        Inn: '43587894',
        OrganizationGuid: 'dhfgdfg',
        Color: 'green',
        Reasons: Array(0),
      },
      organizationGuid: 'fbeb78b6-7ec2-422f-98a3-7e885d0b1dbf',
      organizationId: undefined,
      organizationName: 'Первый поставщик Болдырев',
      participantOfferId: 1116519,
      participantOfferPublishDate: '2022-12-13T07:21:16',
      price: 256,
      priceWithVat: null,
      taxPercen: undefined,
      isBestPrice: true,
    },
  ],
];

const PRODUCTS = [
  {
    id: 419283,
    name: 'Лампа',
    offers: OFFERS,
    okeiCode: '796',
    okeiName: 'Штука',
    price: 10,
    quantity: 1,
    shortOkeiName: 'ШТ',
    sum: 10,
    sumWithVat: 11,
    vatRate: 1,
  },
  {
    id: 419284,
    name: 'Скайрим',
    offers: OFFERS,
    okeiCode: '796',
    okeiName: 'Штука',
    price: 23,
    quantity: 1,
    shortOkeiName: 'ШТ',
    sum: 23,
    sumWithVat: 25.3,
    vatRate: 1,
  },
];