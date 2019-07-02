import { Component, OnInit } from '@angular/core';
import { Kategori } from '../../shared/kategori';
import { HomeMixService } from '../../services/home-mix.service';

@Component({
  selector: 'app-navige',
  templateUrl: './navige.component.html',
  styleUrls: ['./navige.component.css']
})
export class NavigeComponent implements OnInit {

  kategoriler: Kategori[];

  constructor(private homeMixService: HomeMixService) { }

  ngOnInit() {
    this.getKategoriler();
  }

  getKategoriler(): void {
    this.homeMixService.getKategoriler().
    subscribe(kategoriler => this.kategoriler = kategoriler);
  }

}
