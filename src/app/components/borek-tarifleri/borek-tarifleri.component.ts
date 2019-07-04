import { Component, OnInit } from '@angular/core';
import { Yemek } from 'src/app/shared/yemek';
import { BorekTarifleriService } from 'src/app/services/borek-tarifleri.service';

@Component({
  selector: 'app-borek-tarifleri',
  templateUrl: './borek-tarifleri.component.html',
  styleUrls: ['./borek-tarifleri.component.css']
})
export class BorekTarifleriComponent implements OnInit {

  title = 'Borek Tarifleri';
  borekTarifleri: Yemek[];

  constructor(private borekTarifleriService: BorekTarifleriService) { }

  ngOnInit() {
    this.getBorekTarifleri();
  }

  getBorekTarifleri(): void {
    this.borekTarifleriService.getBorekTarifleri()
    .subscribe( borekTarifleri => this.borekTarifleri = borekTarifleri);
  }

}
