import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Heroi } from "../utilidades/heroi.interface";
import { HeroiService } from '../services/heroi.service';

@Component({
  selector: 'app-heroi-detalhe',
  templateUrl: './heroi-detalhe.component.html',
  styleUrls: ['./heroi-detalhe.component.css']
})
export class HeroiDetalheComponent implements OnInit {
  heroi: Heroi

  constructor(
    private rota: ActivatedRoute,
    private heroiService: HeroiService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHeroi();
  }

  getHeroi(): void {
    const id = parseInt(this.rota.snapshot.paramMap.get('id'));
    this.heroiService.getHeroi(id)
      .subscribe(heroi => this.heroi = heroi);
  }

  voltar(): void {
    this.location.back();
  }

}
