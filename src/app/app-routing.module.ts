import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnaYemeklerComponent } from './components/ana-yemekler/ana-yemekler.component';
import { AnaYemeklerDetayComponent } from './components/ana-yemekler-detay/ana-yemekler-detay.component';
import { AparatifYemeklerComponent } from './components/aparatif-yemekler/aparatif-yemekler.component';
import { AparatifYemeklerDetayComponent } from './components/aparatif-yemekler-detay/aparatif-yemekler-detay.component';
import { HomeMixComponent } from './components/home-mix/home-mix.component';
import { BorekTarifleriComponent } from './components/borek-tarifleri/borek-tarifleri.component';
import { BorekTarifleriDetayComponent } from './components/borek-tarifleri-detay/borek-tarifleri-detay.component';
import { YemekEkleComponent } from './components/yemek-ekle/yemek-ekle.component';

const routes: Routes = [
  { path: 'anaYemekTarifleri/:id', component: AnaYemeklerComponent },
  { path: 'anaYemeklerDetay/:id', component: AnaYemeklerDetayComponent },
  { path: 'aperatifYemekTarifleri/:id', component: AparatifYemeklerComponent },
  { path: 'aperatifYemeklerDetay/:id', component: AparatifYemeklerDetayComponent },
  { path: '', redirectTo: '/homeMix', pathMatch: 'full' },
  { path: 'homeMix', component: HomeMixComponent },
  { path: 'borekTarifleri/:id', component: BorekTarifleriComponent },
  { path: 'borekDetay/:id', component: BorekTarifleriDetayComponent },
  { path: 'tarifEkle', component: YemekEkleComponent }

];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}
