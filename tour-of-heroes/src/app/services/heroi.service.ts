import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { Heroi } from '../utilidades/heroi.interface';
import { HEROIS } from '../utilidades/herois.mock';
import { MensagemService } from './mensagem.service';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  constructor(private mensagemService: MensagemService) { }

  getHerois(): Observable<Heroi[]> {
    const resposta = of(HEROIS);
    this.mensagemService.adicionar("HeroiService: heróis resgatados.")
    return resposta;
  }
}
