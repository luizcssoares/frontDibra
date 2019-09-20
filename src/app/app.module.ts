import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListChamadoComponent } from './chamado/list-chamado/list-chamado.component';
import { ChamadoService } from './service/chamado.service';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListChamadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [ChamadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
