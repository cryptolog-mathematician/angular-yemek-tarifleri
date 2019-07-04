import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yemek-ekle',
  templateUrl: './yemek-ekle.component.html',
  styleUrls: ['./yemek-ekle.component.css']
})
export class YemekEkleComponent implements OnInit {

  kategori: string;
  yemekAd: string;
  icerik: string;
  olcu: string;

  icerikler: string[];
  olculer: string[];

  constructor() { }

  ngOnInit() {
  }

  saveIcerikOlcu(): void {
    this.icerikler.push(this.icerik);
    this.olculer.push(this.olcu);
  }

  saveTarif(): void {
    
  }

}
