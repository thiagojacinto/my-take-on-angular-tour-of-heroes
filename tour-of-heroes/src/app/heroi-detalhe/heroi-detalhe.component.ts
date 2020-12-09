import { Component, OnInit, Input } from '@angular/core';
import { Heroi } from "../utilidades/heroi.interface";

@Component({
  selector: 'app-heroi-detalhe',
  templateUrl: './heroi-detalhe.component.html',
  styleUrls: ['./heroi-detalhe.component.css']
})
export class HeroiDetalheComponent implements OnInit {
  @Input() heroi: Heroi

  constructor() { }

  ngOnInit(): void {
  }

}
