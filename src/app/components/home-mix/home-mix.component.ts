import { Component, OnInit } from '@angular/core';
import { Yemek } from '../../shared/yemek';
import { HomeMixService } from '../../services/home-mix.service';
import { BorekTarifleriService } from 'src/app/services/borek-tarifleri.service';

@Component({
  selector: 'app-home-mix',
  templateUrl: './home-mix.component.html',
  styleUrls: ['./home-mix.component.css']
})
export class HomeMixComponent implements OnInit {
  // hom-mix service de kullanilabilir, her tarif in kendi service si de kullanilabilir.
  anaYemek: Yemek;
  aperatifYemek: Yemek;
  borek: Yemek;

  constructor(
    private homeMixService: HomeMixService,
    private borekTarifleriService: BorekTarifleriService) { }

  ngOnInit() {
    this.getAnaYemekler();
    this.getAperatifYemekler();
    this.getBorekTarifleri();
  }

  getAnaYemekler(): void {
    this.homeMixService.getAnayemekler()
    .subscribe(anaYemekler => this.anaYemek = anaYemekler[Math.floor(Math.random() * anaYemekler.length)]);
  }

  getAperatifYemekler(): void {
    this.homeMixService.getAperatifYemekler()
    .subscribe(aperatifYemekler => this.aperatifYemek = aperatifYemekler[Math.floor(Math.random() * aperatifYemekler.length)]);
  }

  getBorekTarifleri(): void {
    this.borekTarifleriService.getBorekTarifleri()
    .subscribe(borekTarifleri => this.borek = borekTarifleri[Math.floor(Math.random() * borekTarifleri.length)]);
  }
}
