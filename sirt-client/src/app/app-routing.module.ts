import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordatorioComponent } from './components/recordatorio/recordatorio.component';

const routes: Routes = [
{path:'',
component:RecordatorioComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
