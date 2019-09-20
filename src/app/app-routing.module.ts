import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListChamadoComponent } from './chamado/list-chamado/list-chamado.component';

const routes: Routes = [ 
  { path: 'chamado/list', component: ListChamadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
