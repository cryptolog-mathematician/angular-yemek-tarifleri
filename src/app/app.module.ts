import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { AnaYemeklerComponent } from './components/ana-yemekler/ana-yemekler.component';
import { AnaYemeklerDetayComponent } from './components/ana-yemekler-detay/ana-yemekler-detay.component';
import { AparatifYemeklerComponent } from './components/aparatif-yemekler/aparatif-yemekler.component';
import { AparatifYemeklerDetayComponent } from './components/aparatif-yemekler-detay/aparatif-yemekler-detay.component';
import { HomeMixComponent } from './components/home-mix/home-mix.component';
import { NavigeComponent } from './components/navige/navige.component';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    AnaYemeklerComponent,
    AnaYemeklerDetayComponent,
    AparatifYemeklerComponent,
    AparatifYemeklerDetayComponent,
    HomeMixComponent,
    NavigeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
