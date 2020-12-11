import { Component, OnInit } from '@angular/core';

import { HeroiService } from '../services/heroi.service';
import { Heroi } from '../utilidades/heroi.interface';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {

  herois: Heroi[];
  
  constructor(private heroiService: HeroiService) { }
  
  ngOnInit(): void {
    this.getHerois();
  }

  getHerois(): void {
    this.heroiService.getHerois()
      .subscribe(herois => this.herois = herois);
  }

  adicionar(nome: string): void {
    nome = nome.trim();
    if (!nome) return;

    this.heroiService.adicionarHeroi({ nome } as Heroi)
      .subscribe(heroi => {
        this.herois.push(heroi);
      });
  }

}
