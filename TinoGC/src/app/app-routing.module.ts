import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbrirChamadoComponent } from './content/abrir-chamado/abrir-chamado.component';
import { DadosEstatisticosComponent } from './content/dados-estatisticos/dados-estatisticos.component';

const routes: Routes = [
  { path: 'abrirChamado', component: AbrirChamadoComponent },
  { path: 'dadosEstatisticos', component: DadosEstatisticosComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
