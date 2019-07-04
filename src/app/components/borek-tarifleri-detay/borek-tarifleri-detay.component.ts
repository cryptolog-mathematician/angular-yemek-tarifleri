import { Component, OnInit } from '@angular/core';
import { Yemek } from 'src/app/shared/yemek';
import { BorekTarifleriService } from 'src/app/services/borek-tarifleri.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-borek-tarifleri-detay',
  templateUrl: './borek-tarifleri-detay.component.html',
  styleUrls: ['./borek-tarifleri-detay.component.css']
})
export class BorekTarifleriDetayComponent implements OnInit {

  borekTarifi: Yemek;

  constructor(
        private borekTarifleriService: BorekTarifleriService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

  ngOnInit() {
    this.getBorekTarifi();
  }

  getBorekTarifi(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.borekTarifleriService.getBorekTarifi(id)
    .subscribe(borekTarifi => this.borekTarifi = borekTarifi);
  }

  goBack(): void {
    this.location.back();
  }

}
