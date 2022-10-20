import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { CdkTableModule } from '@angular/cdk/table'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
//Importando componentes
import { HabitosConsumoComponent } from './components/habitos-consumo/habitos-consumo.component';
import { HistoriaDieteticaComponent } from './components/historia-dietetica/historia-dietetica.component';
import { PlanAlimenticioComponent } from './components/plan-alimenticio/plan-alimenticio.component';
import { DatosMedicosComponent } from './components/datos-medicos/datos-medicos.component';
import { LoginComponent } from './components/login/login.component';
import { RecordatorioComponent } from './components/recordatorio/recordatorio.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecordatorioComponent,
    DatosMedicosComponent,
    HistoriaDieteticaComponent,
    HabitosConsumoComponent,
    PlanAlimenticioComponent

  ],
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    CdkTableModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

