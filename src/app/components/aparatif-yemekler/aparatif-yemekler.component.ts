import { Component, OnInit } from '@angular/core';

import { Yemek } from '../../shared/yemek';
import { AparatifYemeklerService } from '../../services/aparatif-yemekler.service';

@Component({
  selector: 'app-aparatif-yemekler',
  templateUrl: './aparatif-yemekler.component.html',
  styleUrls: ['./aparatif-yemekler.component.css']
})
export class AparatifYemeklerComponent implements OnInit {

  aperatifYemekler: Yemek[];
  title = 'Aperatifler';

  constructor(private aperatifYemeklerService: AparatifYemeklerService) { }

  ngOnInit() {
    this.getAperatifYemekler();
  }

  getAperatifYemekler(): void {
    this.aperatifYemeklerService.getAperatifYemekler().
    subscribe(aperatifYemekler => this.aperatifYemekler = aperatifYemekler);
  }

}
