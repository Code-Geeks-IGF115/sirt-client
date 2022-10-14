import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HistoriaDieteticaComponent}  from './components/historia-dietetica/historia-dietetica.component';


const routes: Routes = [
  {path: 'historiaDietetica',
  component: HistoriaDieteticaComponent,

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
