import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeroisComponent } from './herois/herois.component';
import { HeroiDetalheComponent } from './heroi-detalhe/heroi-detalhe.component';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeroiBuscaComponent } from './heroi-busca/heroi-busca.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroisComponent,
    HeroiDetalheComponent,
    MensagemComponent,
    DashboardComponent,
    HeroiBuscaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
