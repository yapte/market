import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterImportPhaseoutComponent } from './filter-import-phaseout/filter-import-phaseout.component';
import { FilterInStockComponent } from './filter-in-stock/filter-in-stock.component';
import { FilterPriceComponent } from './filter-price/filter-price.component';
import { FilterMspComponent } from './filter-msp/filter-msp.component';
import { FilterCountryComponent } from './filter-country/filter-country.component';
import { FilterStatusComponent } from './filter-status/filter-status.component';
import { FilterCustomerOrganizerComponent } from './filter-customer-organizer/filter-customer-organizer.component';
import { FilterOrderIdComponent } from './filter-order-id/filter-order-id.component';
import { FilterDeliveryRegionsComponent } from './filter-delivery-regions/filter-delivery-regions.component';
import { FilterOkpd2Component } from './filter-okpd2/filter-okpd2.component';
import { FilterImmediateComponent } from './filter-immediate/filter-immediate.component';
import { FilterPublicationDateFromComponent } from './filter-publication-date-from/filter-publication-date-from.component';
import { FilterPublicationDateToComponent } from './filter-publication-date-to/filter-publication-date-to.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FilterImportPhaseoutComponent,
    FilterInStockComponent,
    FilterPriceComponent,
    FilterMspComponent,
    FilterCountryComponent,
    FilterStatusComponent,
    FilterCustomerOrganizerComponent,
    FilterOrderIdComponent,
    FilterDeliveryRegionsComponent,
    FilterOkpd2Component,
    FilterImmediateComponent,
    FilterPublicationDateFromComponent,
    FilterPublicationDateToComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FilterImportPhaseoutComponent,
    FilterInStockComponent,
    FilterPriceComponent,
    FilterMspComponent,
    FilterCountryComponent,
    FilterStatusComponent,
    FilterCustomerOrganizerComponent,
    FilterOrderIdComponent,
    FilterDeliveryRegionsComponent,
    FilterOkpd2Component,
    FilterImmediateComponent,
    FilterPublicationDateFromComponent,
    FilterPublicationDateToComponent,
  ],
})
export class FiltersModule { }
