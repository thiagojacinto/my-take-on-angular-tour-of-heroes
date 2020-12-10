import { Component, OnInit } from '@angular/core';

import { HeroiService } from '../services/heroi.service';
import { MensagemService } from '../services/mensagem.service';
import { Heroi } from '../utilidades/heroi.interface';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {

  heroi: Heroi = {
    id: 1,
    nome: "Tempestade"
  }

  herois: Heroi[];

  heroiSelecionado: Heroi;
  
  constructor(private heroiService: HeroiService, private mensagemService: MensagemService) { }
  
  ngOnInit(): void {
    this.getHerois();
  }

  onSelect(heroi: Heroi): void {
    this.heroiSelecionado = heroi;
    this.mensagemService.adicionar(`HeroiComponent: Herói selecionado ID = ${heroi.id}`)
  }

  getHerois(): void {
    this.heroiService.getHerois()
      .subscribe(herois => this.herois = herois);
  }

}
