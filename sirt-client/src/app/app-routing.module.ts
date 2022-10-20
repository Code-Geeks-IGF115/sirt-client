import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importando componentes
import { RecordatorioComponent } from './components/recordatorio/recordatorio.component';
import { BaseComponent } from './base/base.component';
import { HabitosConsumoComponent } from './components/habitos-consumo/habitos-consumo.component';
import { HistoriaDieteticaComponent } from './components/historia-dietetica/historia-dietetica.component';
import { PlanAlimenticioComponent } from './components/plan-alimenticio/plan-alimenticio.component';
import { DatosMedicosComponent } from './components/datos-medicos/datos-medicos.component';
import { LoginComponent} from './components/login/login.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch: 'full'
  },
  {path: 'nutricion/habitosConsumo',
  component: HabitosConsumoComponent
  },
  {path:'nutricion/historiaDietetica',
    component:HistoriaDieteticaComponent
  },
  {
    path:'nutricion/planAlimenticio',
    component:PlanAlimenticioComponent
  },
  {path:'nutricion/datosMedicos',
  component:DatosMedicosComponent
  },
  {path:'nutricion/recordatorio24Horas',
  component:RecordatorioComponent,

  }
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
