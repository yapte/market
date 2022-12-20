import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TradeCreatePageComponent } from './pages/trade-create-page/trade-create-page.component';
import { TradeListPageComponent } from './pages/trade-list-page/trade-list-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'trade-create', component: TradeCreatePageComponent },
  { path: 'trade-list', component: TradeListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
