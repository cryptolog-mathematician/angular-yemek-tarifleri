import { Component, OnInit } from '@angular/core';
import { Yemek } from '../../shared/yemek';
import { HomeMixService } from '../../services/home-mix.service';

@Component({
  selector: 'app-home-mix',
  templateUrl: './home-mix.component.html',
  styleUrls: ['./home-mix.component.css']
})
export class HomeMixComponent implements OnInit {

  anaYemek: Yemek;
  aperatifYemek: Yemek;

  constructor(private homeMixService: HomeMixService) { }

  ngOnInit() {
    this.getAnaYemekler();
    this.getAperatifYemekler();
  }

  getAnaYemekler(): void {
    this.homeMixService.getAnayemekler()
    .subscribe(anaYemekler => this.anaYemek = anaYemekler[Math.floor(Math.random() * (anaYemekler.length))]);
  }

  getAperatifYemekler(): void {
    this.homeMixService.getAperatifYemekler()
    .subscribe(aperatifYemekler => this.aperatifYemek = aperatifYemekler[Math.floor(Math.random() * (aperatifYemekler.length))]);
  }
}
