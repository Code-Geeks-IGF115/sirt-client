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
import { ExamenesLaboratorioComponent } from './components/examenes-laboratorio/examenes-laboratorio.component';
import { RegistroResponsableComponent } from './components/registro-responsable/registro-responsable.component';
const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'',
    component:BaseComponent,
    children:[
      {
        path:'',
        redirectTo:'/login',
        pathMatch: 'full'
      },
      {path: 'nutricion/habitosConsumo/:crud/:idConsulta',
      component: HabitosConsumoComponent
      },
      {path: 'nutricion/habitosConsumo/:crud/:idConsulta',
      component: HabitosConsumoComponent
      },
      {path:'nutricion/historiaDietetica/:crud/:idConsulta',
        component:HistoriaDieteticaComponent
      },
      {path:'nutricion/historiaDietetica/:crud/:idConsulta',
        component:HistoriaDieteticaComponent
      },
      {
        path:'nutricion/planAlimenticio/:idConsulta',
        component:PlanAlimenticioComponent
      },
      {path:'nutricion/datosMedicos/:crud/:idConsulta',
      component:DatosMedicosComponent
      },
      {path:'nutricion/datosMedicos/:crud/:idConsulta',
      component:DatosMedicosComponent
      },
      {path:'nutricion/recordatorio24Horas/:crud/:idConsulta',
      component:RecordatorioComponent,
      },
      {path:'nutricion/recordatorio24Horas/:crud/:idConsulta',
      component:RecordatorioComponent,
      },
      {
        path:'beneficiario/:idBeneficiario/nutricion/examenes/:idConsulta',
        component: ExamenesLaboratorioComponent
      }
    ]
  },
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
