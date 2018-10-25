import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { ContentComponent } from './content/content.component';
import { AbrirChamadoComponent } from './content/abrir-chamado/abrir-chamado.component';
import { DadosEstatisticosComponent } from './content/dados-estatisticos/dados-estatisticos.component';
import { DashboardHomeComponent } from './content/dashboard-home/dashboard-home.component';
import { ChamadoCardComponent } from './content/chamado-card/chamado-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    AbrirChamadoComponent,
    DadosEstatisticosComponent,
    DashboardHomeComponent,
    ChamadoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    RouterModule
  ],
  exports: [
    ContentComponent,
    AbrirChamadoComponent,
    DadosEstatisticosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
