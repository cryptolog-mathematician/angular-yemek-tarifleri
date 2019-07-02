import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Yemek } from '../../shared/yemek';
import { AnaYemeklerService } from '../../services/ana-yemekler.service';

@Component({
  selector: 'app-ana-yemekler-detay',
  templateUrl: './ana-yemekler-detay.component.html',
  styleUrls: ['./ana-yemekler-detay.component.css']
})
export class AnaYemeklerDetayComponent implements OnInit {

  anaYemek: Yemek;

  constructor(
    private route: ActivatedRoute,
    private anaYemeklerService: AnaYemeklerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getAnaYemek();
  }

  getAnaYemek(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.anaYemeklerService.getAnaYemek(id)
      .subscribe(anaYemek => this.anaYemek = anaYemek);
  }

  save(): void {
     this.anaYemeklerService.updateAnaYemek(this.anaYemek)
       .subscribe(() => this.goBack());
   }

  goBack(): void {
    this.location.back();
  }

}
