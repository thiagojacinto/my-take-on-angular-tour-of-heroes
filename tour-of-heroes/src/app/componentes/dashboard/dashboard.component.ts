import { Component, OnInit } from '@angular/core';
import { HeroiService } from 'src/app/services/heroi.service';

import { Heroi } from 'src/app/utilidades/heroi.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  herois: Heroi[] = [];

  constructor(private heroiService: HeroiService) { }

  ngOnInit(): void {
    this.getTopHerois();
  }

  getTopHerois(): void {
    this.heroiService.getHerois()
      .subscribe(herois => this.herois = herois.slice(0, 5));
  }

}
