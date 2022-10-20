import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HabitosConsumoComponent } from './components/habitos-consumo/habitos-consumo.component';
import { HistoriaDieteticaComponent } from './components/historia-dietetica/historia-dietetica.component';
import { PlanAlimenticioComponent } from './components/plan-alimenticio/plan-alimenticio.component';
import { DatosMedicosComponent } from './components/datos-medicos/datos-medicos.component';
const routes: Routes = [
  {path: 'habitosConsumo',
  component: HabitosConsumoComponent
  },
  {path:'historiaDietetica',
    component:HistoriaDieteticaComponent
  },
  {
    path:'consultaNutricional/planAlimenticio',
    component:PlanAlimenticioComponent
  },
  {path:'datosMedicos',
  component:DatosMedicosComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
