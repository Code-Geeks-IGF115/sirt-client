import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitosConsumoComponent } from './components/habitos-consumo/habitos-consumo.component';


const routes: Routes = [
  {path: 'habitosConsumo',
  component: HabitosConsumoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
