import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { HeroiService } from '../services/heroi.service';
import { Heroi } from '../utilidades/heroi.interface';

@Component({
  selector: 'app-heroi-busca',
  templateUrl: './heroi-busca.component.html',
  styleUrls: ['./heroi-busca.component.css']
})
export class HeroiBuscaComponent implements OnInit {

  herois$: Observable<Heroi[]>;

  private palavraBuscada = new Subject<string>();

  constructor(private heroiService: HeroiService) { }
  
  ngOnInit(): void {
    this.herois$ = this.palavraBuscada.pipe(
      // aguarda 300 ms após cada tecla pressionada
      debounceTime(300),
      // ignora palavas repetidas
      distinctUntilChanged(),
      // atualiza a busca a cada mudança na palavra buscada
      switchMap((palavra: string) => this.heroiService.procurarHeroi(palavra))
    );
  }

  procurar(palavra: string): void {
    this.palavraBuscada.next(palavra);
  }
}
