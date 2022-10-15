import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatosMedicosComponent } from './components/datos-medicos/datos-medicos.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'datosmedicos',component:DatosMedicosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
