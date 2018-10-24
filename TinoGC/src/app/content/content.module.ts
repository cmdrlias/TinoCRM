import { NgModule } from "@angular/core";
import { AbrirChamadoComponent } from "./abrir-chamado/abrir-chamado.component";
import { DadosEstatisticosComponent } from "./dados-estatisticos/dados-estatisticos.component";

@NgModule({
    declarations: [
        AbrirChamadoComponent,
        DadosEstatisticosComponent
    ],
    exports: [
        AbrirChamadoComponent,
        DadosEstatisticosComponent
    ]
})

export class contentModule {

}