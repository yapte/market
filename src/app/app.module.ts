import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TradeCreatePageComponent } from './pages/trade-create-page/trade-create-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { TradeFormComponent } from './components/trade-form/trade-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TradeFormMainNameComponent } from './components/trade-form/components/trade-form-main-name/trade-form-main-name.component';
import { TradeFormDescriptionComponent } from './components/trade-form/components/trade-form-main-description/trade-form-description.component';
import { TradeFormMainDocsComponent } from './components/trade-form/components/trade-form-main-docs/trade-form-main-docs.component';
import { TradeFormIsImportPhaseoutComponent } from './components/trade-form/components/trade-form-main-is-import-phaseout/trade-form-is-import-phaseout.component';
import { TradeFormIsSmpOnlyComponent } from './components/trade-form/components/trade-form-main-is-smp-only/trade-form-is-smp-only.component';
import { TradeFormWorkgroupsComponent } from './components/trade-form/components/trade-form-main-workgroups/trade-form-workgroups.component';
import { TradeFormIsManualPriceComponent } from './components/trade-form/components/trade-form-items-is-manual-price/trade-form-is-manual-price.component';
import { TradeFormSumWithoutVatComponent } from './components/trade-form/components/trade-form-items-sum-without-vat/trade-form-sum-without-vat.component';
import { TradeFormItemsTotalComponent } from './components/trade-form/components/trade-form-items-total/trade-form-items-total.component';
import { TradeFormItemsProductNameComponent } from './components/trade-form/components/trade-form-items-product-name/trade-form-items-product-name.component';
import { TradeFormItemsProductQtyComponent } from './components/trade-form/components/trade-form-items-product-qty/trade-form-items-product-qty.component';
import { TradeFormItemsProductOkeiComponent } from './components/trade-form/components/trade-form-items-product-okei/trade-form-items-product-okei.component';
import { TradeFormItemsProductPriceComponent } from './components/trade-form/components/trade-form-items-product-price/trade-form-items-product-price.component';
import { TradeFormItemsProductSumComponent } from './components/trade-form/components/trade-form-items-product-sum/trade-form-items-product-sum.component';
import { TradeFormItemsVatComponent } from './components/trade-form/components/trade-form-items-vat/trade-form-items-vat.component';
import { TradeFormItemsProductTypeComponent } from './components/trade-form/components/trade-form-items-product-type/trade-form-items-product-type.component';
import { TradeFormItemsProductDescriptionComponent } from './components/trade-form/components/trade-form-items-product-description/trade-form-items-product-description.component';
import { TradeFormItemsProductOkpd2Component } from './components/trade-form/components/trade-form-items-product-okpd2/trade-form-items-product-okpd2.component';
import { TradeFormItemsProductOkved2Component } from './components/trade-form/components/trade-form-items-product-okved2/trade-form-items-product-okved2.component';
import { TradeFormItemsProductMarkComponent } from './components/trade-form/components/trade-form-items-product-mark/trade-form-items-product-mark.component';
import { TradeFormItemsProductGostComponent } from './components/trade-form/components/trade-form-items-product-gost/trade-form-items-product-gost.component';
import { TradeFormItemsProductParametersComponent } from './components/trade-form/components/trade-form-items-product-parameters/trade-form-items-product-parameters.component';
import { TradeFormItemsProductPositionNumberComponent } from './components/trade-form/components/trade-form-items-product-position-number/trade-form-items-product-position-number.component';
import { TradeFormItemsProductPositionNameComponent } from './components/trade-form/components/trade-form-items-product-position-name/trade-form-items-product-position-name.component';
import { TradeFormDetailsDeliveryRegionComponent } from './components/trade-form/components/trade-form-details-delivery-region/trade-form-details-delivery-region.component';
import { TradeFormDetailsDeliveryAddressComponent } from './components/trade-form/components/trade-form-details-delivery-address/trade-form-details-delivery-address.component';
import { TradeFormDetailsDeliveryTermsComponent } from './components/trade-form/components/trade-form-details-delivery-terms/trade-form-details-delivery-terms.component';
import { TradeFormDetailsContractFormComponent } from './components/trade-form/components/trade-form-details-contract-form/trade-form-details-contract-form.component';
import { TradeFormDetailsPaymentConditionsComponent } from './components/trade-form/components/trade-form-details-payment-conditions/trade-form-details-payment-conditions.component';
import { TradeFormDetailsIsImmediateComponent } from './components/trade-form/components/trade-form-details-is-immediate/trade-form-details-is-immediate.component';
import { TradeFormDetailsFillAppEndDateComponent } from './components/trade-form/components/trade-form-details-fill-app-end-date/trade-form-details-fill-app-end-date.component';
import { TradeFormDetailsPlanedDealDateComponent } from './components/trade-form/components/trade-form-details-planed-deal-date/trade-form-details-planed-deal-date.component';
import { TradeFormDetailsContactFioComponent } from './components/trade-form/components/trade-form-details-contact-fio/trade-form-details-contact-fio.component';
import { TradeFormDetailsContactPhoneComponent } from './components/trade-form/components/trade-form-details-contact-phone/trade-form-details-contact-phone.component';
import { TradeFormDetailsContactPhonetailComponent } from './components/trade-form/components/trade-form-details-contact-phonetail/trade-form-details-contact-phonetail.component';
import { TradeFormDetailsContactEmailComponent } from './components/trade-form/components/trade-form-details-contact-email/trade-form-details-contact-email.component';
import { TradeFormEisIsNotDishonestComponent } from './components/trade-form/components/trade-form-eis-is-not-dishonest/trade-form-eis-is-not-dishonest.component';
import { TradeFormEisIsEmergencyComponent } from './components/trade-form/components/trade-form-eis-is-emergency/trade-form-eis-is-emergency.component';
import { TradeFormEisApplicationRequestOrderComponent } from './components/trade-form/components/trade-form-eis-application-request-order/trade-form-eis-application-request-order.component';
import { TradeFormEisResultsReviewOrderComponent } from './components/trade-form/components/trade-form-eis-results-review-order/trade-form-eis-results-review-order.component';
import { TradeFormEisPlanNumberComponent } from './components/trade-form/components/trade-form-eis-plan-number/trade-form-eis-plan-number.component';
import { TradeFormEisPlanPositionNumberComponent } from './components/trade-form/components/trade-form-eis-plan-position-number/trade-form-eis-plan-position-number.component';

import { TradeFormItemsIsWithVatComponent } from './components/trade-form/components/trade-form-items-is-with-vat/trade-form-items-is-with-vat.component';
import { ShowIfTenantDirective } from './directives/show-if-tenant.directive';
import { QwertyDirective } from './directives/qwerty.directive';
import { TradeFormInvitationAutoRegionsComponent } from './components/trade-form/components/trade-form-invitation-auto-regions/trade-form-invitation-auto-regions.component';
import { TradeFormInvitationAutoIsHideApplicationComponent } from './components/trade-form/components/trade-form-invitation-auto-is-hide-application/trade-form-invitation-auto-is-hide-application.component';
import { TradeFormInvitationAutoMethodComponent } from './components/trade-form/components/trade-form-invitation-auto-method/trade-form-invitation-auto-method.component';
import { TradeFormMainIsEisComponent } from './components/trade-form/components/trade-form-main-is-eis/trade-form-main-is-eis.component';
import { TradeFormInvitationAutoKeywordsComponent } from './components/trade-form/components/trade-form-invitation-auto-keywords/trade-form-invitation-auto-keywords.component';
import { TradeFormInvitationManualInvitatedSuppliersComponent } from './components/trade-form/components/trade-form-invitation-manual-invitated-suppliers/trade-form-invitation-manual-invitated-suppliers.component';
import { DontShowIfTenantDirective } from './directives/dont-show-if-tenant.directive';


registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    TradeFormComponent,

    ShowIfTenantDirective,
    DontShowIfTenantDirective,
    QwertyDirective,

    HomePageComponent,
    TradeCreatePageComponent,
    TradeFormMainNameComponent,
    TradeFormDescriptionComponent,
    TradeFormIsImportPhaseoutComponent,
    TradeFormMainDocsComponent,
    TradeFormIsSmpOnlyComponent,
    TradeFormWorkgroupsComponent,
    TradeFormIsManualPriceComponent,
    TradeFormSumWithoutVatComponent,
    TradeFormItemsTotalComponent,
    TradeFormItemsProductNameComponent,
    TradeFormItemsProductQtyComponent,
    TradeFormItemsProductOkeiComponent,
    TradeFormItemsProductPriceComponent,
    TradeFormItemsProductSumComponent,
    TradeFormItemsVatComponent,
    TradeFormItemsProductTypeComponent,
    TradeFormItemsProductDescriptionComponent,
    TradeFormItemsProductOkpd2Component,
    TradeFormItemsProductOkved2Component,
    TradeFormItemsProductMarkComponent,
    TradeFormItemsProductGostComponent,
    TradeFormItemsProductParametersComponent,
    TradeFormItemsProductPositionNumberComponent,
    TradeFormItemsProductPositionNameComponent,
    TradeFormDetailsDeliveryRegionComponent,
    TradeFormDetailsDeliveryAddressComponent,
    TradeFormDetailsDeliveryTermsComponent,
    TradeFormDetailsContractFormComponent,
    TradeFormDetailsPaymentConditionsComponent,
    TradeFormDetailsIsImmediateComponent,
    TradeFormDetailsFillAppEndDateComponent,
    TradeFormDetailsPlanedDealDateComponent,
    TradeFormDetailsContactFioComponent,
    TradeFormDetailsContactPhoneComponent,
    TradeFormDetailsContactPhonetailComponent,
    TradeFormDetailsContactEmailComponent,
    TradeFormEisIsNotDishonestComponent,
    TradeFormEisIsEmergencyComponent,
    TradeFormEisApplicationRequestOrderComponent,
    TradeFormEisResultsReviewOrderComponent,
    TradeFormEisPlanNumberComponent,
    TradeFormEisPlanPositionNumberComponent,
    TradeFormItemsIsWithVatComponent,
    TradeFormInvitationAutoRegionsComponent,
    TradeFormInvitationAutoIsHideApplicationComponent,
    TradeFormInvitationAutoMethodComponent,
    TradeFormMainIsEisComponent,
    TradeFormInvitationAutoKeywordsComponent,
    TradeFormInvitationManualInvitatedSuppliersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

    AutoCompleteModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    ChipsModule,
    DropdownModule,
    FileUploadModule,
    InputMaskModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule,
    MultiSelectModule,
    PanelModule,
    RadioButtonModule,
    SelectButtonModule,
    TabViewModule,
    TooltipModule,
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'RUB' },
    { provide: LOCALE_ID, useValue: 'ru-RU' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
