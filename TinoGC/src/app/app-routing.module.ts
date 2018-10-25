import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbrirChamadoComponent } from './content/abrir-chamado/abrir-chamado.component';
import { DadosEstatisticosComponent } from './content/dados-estatisticos/dados-estatisticos.component';
import { DashboardHomeComponent } from './content/dashboard-home/dashboard-home.component';

const routes: Routes = [
  { path: 'abrirChamado', component: AbrirChamadoComponent },
  { path: 'dadosEstatisticos', component: DadosEstatisticosComponent },
  { path: '', component: DashboardHomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
