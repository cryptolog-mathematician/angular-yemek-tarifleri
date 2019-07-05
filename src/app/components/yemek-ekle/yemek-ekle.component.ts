import { Component, OnInit } from '@angular/core';
import { BorekTarifleriService } from 'src/app/services/borek-tarifleri.service';
import { AnaYemeklerService } from 'src/app/services/ana-yemekler.service';
import { AparatifYemeklerService } from 'src/app/services/aparatif-yemekler.service';
import { Yemek } from 'src/app/shared/yemek';

import { Location } from '@angular/common';

@Component({
  selector: 'app-yemek-ekle',
  templateUrl: './yemek-ekle.component.html',
  styleUrls: ['./yemek-ekle.component.css']
})
export class YemekEkleComponent implements OnInit {

  title = 'Tarif Ekle';
  kategoriAd: string;
  yemekAd: string;
  photo: string;
  icerikler: string[] = [];
  olculer: string[] = [];

  service: any;
  yemek: Yemek = new Yemek();

  constructor(
    private anaYemeklerService: AnaYemeklerService,
    private aperatifYemeklerService: AparatifYemeklerService,
    private borekTarifleriService: BorekTarifleriService,
    private location: Location,
  ) { }

  ngOnInit() { }

  saveIcerik(icerik: string): void {
    this.icerikler.push(icerik);
  }

  saveOlcu(olcu: string): void {
    this.olculer.push(olcu);
  }

  saveTarif() {
    this.yemek.name = this.yemekAd;
    this.yemek.ingradients = this.icerikler;
    this.yemek.measurements = this.olculer;
    this.yemek.image = '';
    this.yemek.preparation = 'yes';
  }

  addTarif(kategoriAd: string): void {
    this.saveTarif();
    if (kategoriAd.toLowerCase().includes('borek') || kategoriAd.toLowerCase().includes('börek')) {
      this.borekTarifleriService.addTarif(this.yemek)
      .subscribe(
        () => this.goBack()
      );
    }
    if (kategoriAd.toLowerCase().includes('anayemek') || kategoriAd.toLowerCase().includes('ana yemek')) {
      this.anaYemeklerService.addTarif(this.yemek)
      .subscribe(
        () => this.goBack()
      );
    }
    if (kategoriAd.toLowerCase().includes('aperatif')) {
      this.aperatifYemeklerService.addTarif(this.yemek)
      .subscribe(
        () => this.goBack()
      );
    }
  }

  goBack(): void {
    this.location.back();
  }

}
