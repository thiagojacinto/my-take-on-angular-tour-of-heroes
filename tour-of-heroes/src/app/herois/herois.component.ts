import { Component, OnInit } from '@angular/core';
import { Heroi } from '../utilidades/heroi.interface';
import { HEROIS } from '../utilidades/herois.mock';

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

  herois = HEROIS;

  heroiSelecionado: Heroi;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onSelect(heroi: Heroi): void {
    this.heroiSelecionado = heroi;
  }

}
