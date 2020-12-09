import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroisComponent } from './herois/herois.component';
import { HeroiDetalheComponent } from './heroi-detalhe/heroi-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroisComponent,
    HeroiDetalheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
