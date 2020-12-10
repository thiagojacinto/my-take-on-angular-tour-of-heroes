import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  private mensagens: string[] = [];

  adicionar(mensagem: string) {
    this.mensagens.push(mensagem);
  }

  limpar() {
    this.mensagens = [];
  }

  paraLista(): string[] {
    return ([] as string[]).concat(this.mensagens);
  }
}
