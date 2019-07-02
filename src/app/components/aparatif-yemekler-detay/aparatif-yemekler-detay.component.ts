import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Yemek } from '../../shared/yemek';
import { AparatifYemeklerService } from '../../services/aparatif-yemekler.service';

@Component({
  selector: 'app-aparatif-yemekler-detay',
  templateUrl: './aparatif-yemekler-detay.component.html',
  styleUrls: ['./aparatif-yemekler-detay.component.css']
})
export class AparatifYemeklerDetayComponent implements OnInit {

  aperatifYemek: Yemek;

  constructor(
    private route: ActivatedRoute,
    private aperatifYemeklerService: AparatifYemeklerService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getAperatifYemek();
  }

  getAperatifYemek(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.aperatifYemeklerService.getAperatifYemek(id)
      .subscribe(aperatifYemek => this.aperatifYemek = aperatifYemek);
  }

  goBack(): void {
    this.location.back();
  }

}
