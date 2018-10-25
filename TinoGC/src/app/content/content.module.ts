import { NgModule } from "@angular/core";
import { AbrirChamadoComponent } from "./abrir-chamado/abrir-chamado.component";
import { DadosEstatisticosComponent } from "./dados-estatisticos/dados-estatisticos.component";
import { ChamadoCardComponent } from "./chamado-card/chamado-card.component";
import { DashboardHomeComponent } from "./dashboard-home/dashboard-home.component";

@NgModule({
    declarations: [
        AbrirChamadoComponent,
        DadosEstatisticosComponent,
        ChamadoCardComponent,
        DashboardHomeComponent,
        ChamadoCardComponent
    ],
    exports: [
        AbrirChamadoComponent,
        DadosEstatisticosComponent,
        ChamadoCardComponent,
        DashboardHomeComponent,
        ChamadoCardComponent
    ]
})

export class contentModule {

}