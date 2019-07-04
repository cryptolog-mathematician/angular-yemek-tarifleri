import { Component, OnInit } from '@angular/core';
import { Yemek } from '../../shared/yemek';
import { AnaYemeklerService } from '../../services/ana-yemekler.service';

@Component({
  selector: 'app-ana-yemekler',
  templateUrl: './ana-yemekler.component.html',
  styleUrls: ['./ana-yemekler.component.css']
})
export class AnaYemeklerComponent implements OnInit {

  anaYemekler: Yemek[];
  title = 'Ana Yemekler';

  constructor(private anaYemeklerService: AnaYemeklerService) { }

  ngOnInit() {
    this.getAnaYemekTarifleri();
  }

  getAnaYemekTarifleri(): void {
    this.anaYemeklerService.getAnaYemekTarifleri().
    subscribe(anaYemekler => this.anaYemekler = anaYemekler);
  }

}
