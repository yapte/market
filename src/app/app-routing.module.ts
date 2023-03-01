import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PpsPageComponent } from './pages/pps-page/pps-page.component';
import { SimpleFormPageComponent } from './pages/simple-form-page/simple-form-page.component';
import { SimpleForm2PageComponent } from './pages/simple-form2-page/simple-form2-page.component';
import { SimpleForm3PageComponent } from './pages/simple-form3-page/simple-form3-page.component';
import { TradeCreatePageComponent } from './pages/trade-create-page/trade-create-page.component';
import { TradeListPageComponent } from './pages/trade-list-page/trade-list-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'trade-create', component: TradeCreatePageComponent },
  { path: 'trade-list', component: TradeListPageComponent },
  { path: 'pps', component: PpsPageComponent }, 
  { path: 'simple-form', component: SimpleFormPageComponent },
  { path: 'simple-form2', component: SimpleForm2PageComponent },
  { path: 'simple-form3', component: SimpleForm3PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
