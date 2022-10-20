import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { HabitosConsumoComponent } from './components/habitos-consumo/habitos-consumo.component';


const routes: Routes = [
  {path:'',
    component:BaseComponent,
  children: [
    {path: 'consultaNutricional/habitosConsumo',
    component: HabitosConsumoComponent
    }
  ]
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
