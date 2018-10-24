import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ChamadoCardComponent } from "./chamado-card/chamado-card.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        ChamadoCardComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        ChamadoCardComponent
    ]
})
export class TemplateModule {}