import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanAlimenticioComponent } from './components/plan-alimenticio/plan-alimenticio.component';

const routes: Routes = [
{
  path:'',
  component:PlanAlimenticioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
