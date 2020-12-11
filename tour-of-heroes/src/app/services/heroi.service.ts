import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Heroi } from '../utilidades/heroi.interface';
import { HEROIS } from '../utilidades/herois.mock';
import { MensagemService } from './mensagem.service';

@Injectable({
  providedIn: 'root',
})
export class HeroiService {
  private opcoesHttp = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private heroisUrl = 'http://localhost:3000/api/v1/herois';

  constructor(
    private mensagemService: MensagemService,
    private http: HttpClient
  ) {}

  getHerois(): Observable<Heroi[]> {
    // const resposta = of(HEROIS);
    const resposta = this.http.get<Heroi[]>(this.heroisUrl).pipe(
      tap((_) => this.logMensagem('heróis resgatados.')),
      catchError(this.lidarComErro<Heroi[]>('getHerois', []))
    );

    return resposta;
  }

  getHeroi(id: number): Observable<Heroi> {
    const url = `${this.heroisUrl}/${id}`;

    // const resposta = of(HEROIS.find((heroi) => heroi.id === id));
    const resposta = this.http.get<Heroi>(url).pipe(
      tap((_) => this.logMensagem(`herói selecionando resgatado, ID = ${id}`)),
      catchError(this.lidarComErro<Heroi>(`getHeroi com id = ${id}`))
    );

    return resposta;
  }

  atualizarHeroi(heroi: Heroi): Observable<any> {
    const url = `${this.heroisUrl}/${heroi.id}`;
    return this.http.put(url, heroi, this.opcoesHttp).pipe(
      tap((_) => this.logMensagem(`herói id = ${heroi.id} foi atualizado`)),
      catchError(this.lidarComErro<any>('atualizarHeroi'))
    );
  }

  adicionarHeroi(heroi: Heroi): Observable<Heroi> {
    return this.http.post<Heroi>(this.heroisUrl, heroi, this.opcoesHttp)
      .pipe(
        tap((novoHeroi: Heroi) => this.logMensagem(`herói '${heroi.nome}' adicionado`)),
        catchError(this.lidarComErro<Heroi>('adicionarHeroi'))
      );
  }

  logMensagem(mensagem: string) {
    this.mensagemService.adicionar(`HeroiService: ${mensagem}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operacao - name of the operation that failed
   * @param resultado - optional value to return as the observable result
   */
  lidarComErro<T>(operacao = 'operação', resultado?: T) {
    return (erro: any): Observable<T> => {
      console.error(erro);
      this.logMensagem(`${operacao} falhou: ${erro.message}`);

      return of(resultado as T);
    };
  }
}
