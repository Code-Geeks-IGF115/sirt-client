import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MatFormFieldModule} from '@angular/material/form-field';

//Importando componentes
import { RecordatorioComponent } from './components/recordatorio/recordatorio.component';
import { BaseComponent } from './base/base.component';
import { HabitosConsumoComponent } from './components/habitos-consumo/habitos-consumo.component';
import { HistoriaDieteticaComponent } from './components/historia-dietetica/historia-dietetica.component';
import { PlanAlimenticioComponent } from './components/plan-alimenticio/plan-alimenticio.component';
import { DatosMedicosComponent } from './components/datos-medicos/datos-medicos.component';
import { RegistroBeneficiarioComponent } from './components/registro-beneficiario/registro-beneficiario.component';
import { LoginComponent} from './components/login/login.component';
import { ExamenesLaboratorioComponent } from './components/examenes-laboratorio/examenes-laboratorio.component';
import { ExpedienteMedicoComponent } from './components/expediente-medico/expediente-medico.component';
import { FichaComponent } from './components/ficha/ficha.component';
import { BusquedaExpedienteComponent } from './components/busqueda-expediente/busqueda-expediente.component';
import { RegistroResponsableComponent } from './components/registro-responsable/registro-responsable.component';
import { ConsultaPsicologicaComponent } from './components/consulta-psicologica/consulta-psicologica.component';
import { RegistroPedagogicoComponent } from './components/registro-pedagogico/registro-pedagogico.component';
import { FichaNutricionComponent } from './components/ficha-nutricion/ficha-nutricion.component';
import { FichaPsicologicaComponent } from './components/ficha-psicologica/ficha-psicologica.component';
import { ConsultaMedicaComponent } from './components/consulta-medica/consulta-medica.component';

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
        redirectTo:'busquedaExpediente',
        pathMatch: 'full'
      },
      {path: 'beneficiario/:idBeneficiario/nutricion/habitosConsumo/:crud',
      component: HabitosConsumoComponent
      },
      {path: 'nutricion/habitosConsumo/:crud/:idConsulta',
      component: HabitosConsumoComponent
      },
      {path:'beneficiario/:idBeneficiario/nutricion/historiaDietetica/:crud',
        component:HistoriaDieteticaComponent
      },
      {path:'beneficiario/:idBeneficiario/nutricion/historiaDietetica/:crud',
        component:HistoriaDieteticaComponent
      },
      {
        path:'beneficiario/:idBeneficiario/nutricion/planAlimenticio/:crud',
        component:PlanAlimenticioComponent
      },
      {path:'beneficiario/:idBeneficiario/nutricion/datosMedicos/:crud',
      component:DatosMedicosComponent
      },
      {path:'beneficiario/:idBeneficiario/nutricion/datosMedicos/:crud/:idConsulta',
      component:DatosMedicosComponent
      },
      {path:'beneficiario/:idBeneficiario/nutricion/recordatorio24Horas/:crud',
      component:RecordatorioComponent,
      },
      {path:'nutricion/recordatorio24Horas/:crud',
      component:RecordatorioComponent,
      },
      {
        path:'beneficiario/:idBeneficiario/examenes',
        component: ExamenesLaboratorioComponent
      },
      {path: 'beneficiario/:idBeneficiario/expedienteMedico',
        component: ExpedienteMedicoComponent,},
      {
        path:'registro/responsable/:dui/beneficiario/:crud',
        component:RegistroBeneficiarioComponent
      },
      {
        path:'registro/responsable/:dui/beneficiario/:crud/:idBeneficiario',
        component:RegistroBeneficiarioComponent
      },
      {
        path:'beneficiario/:idBeneficiario/fichaMedica',
        component:FichaComponent
      },
      {
        path:'beneficiario/:idBeneficiario/fichaPsicologica',
        component:FichaPsicologicaComponent
      },
      {
        path:'beneficiario/:idBeneficiario/fichaNutricion',
        component:FichaNutricionComponent
      },
      {path:'busquedaExpediente',
      component: BusquedaExpedienteComponent
      },
      {
        path:'registro/responsable/:crud',
        component: RegistroResponsableComponent
      },
      {
        path:'registro/responsable/:crud/:dui',
        component: RegistroResponsableComponent
      },
      {
        path: 'beneficiario/:idBeneficiario/consultaPsicologica/datosMedicos/:crud',
        component: ConsultaPsicologicaComponent
      },
      {
        path: 'beneficiario/:idBeneficiario/consultaPsicologica/datosMedicos/:crud/:idConsulta',
        component: ConsultaPsicologicaComponent
      },
      {
        path: 'beneficiario/:idBeneficiario/consultaPsicologica/:idConsulta/registroPedagogico/:crud',
        component: RegistroPedagogicoComponent
      },
      {
        path: 'beneficiario/:idBeneficiario/consultaMedica',
        component: ConsultaMedicaComponent
      },
    ]
  },
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
