import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeroiDetalheComponent } from './heroi-detalhe/heroi-detalhe.component';

import { HeroisComponent } from './herois/herois.component';

const rotas: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'herois', component: HeroisComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroi/:id', component: HeroiDetalheComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
