import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnaYemeklerComponent } from './components/ana-yemekler/ana-yemekler.component';
import { AnaYemeklerDetayComponent } from './components/ana-yemekler-detay/ana-yemekler-detay.component';
import { AparatifYemeklerComponent } from './components/aparatif-yemekler/aparatif-yemekler.component';
import { AparatifYemeklerDetayComponent } from './components/aparatif-yemekler-detay/aparatif-yemekler-detay.component';
import { HomeMixComponent } from './components/home-mix/home-mix.component';

const routes: Routes = [
  { path: 'anaYemekTarifleri/:id', component: AnaYemeklerComponent },
  { path: 'anaYemeklerDetay/:id', component: AnaYemeklerDetayComponent },
  { path: 'aperatifYemekTarifleri/:id', component: AparatifYemeklerComponent },
  { path: 'aperatifYemeklerDetay/:id', component: AparatifYemeklerDetayComponent },
  { path: '', redirectTo: '/homeMix', pathMatch: 'full' },
  { path: 'homeMix', component: HomeMixComponent }
];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}
