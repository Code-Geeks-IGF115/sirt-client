
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HabitosConsumoComponent } from './components/habitos-consumo/habitos-consumo.component';
import { HistoriaDieteticaComponent } from './components/historia-dietetica/historia-dietetica.component';
import { PlanAlimenticioComponent } from './components/plan-alimenticio/plan-alimenticio.component';
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
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
