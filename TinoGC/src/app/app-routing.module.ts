import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbrirChamadoComponent } from './content/abrir-chamado/abrir-chamado.component';
import { DadosEstatisticosComponent } from './content/dados-estatisticos/dados-estatisticos.component';
import { DashboardHomeComponent } from './content/dashboard-home/dashboard-home.component';
import { DetalhesCardComponent } from './content/detalhes-card/detalhes-card.component';

const routes: Routes = [
  { path: 'abrir-chamado', component: AbrirChamadoComponent },
  { path: 'dados-estatisticos', component: DadosEstatisticosComponent },
  { path: '', component: DashboardHomeComponent },
  { path: 'detalhes-chamado', component: DetalhesCardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
