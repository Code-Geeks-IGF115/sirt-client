import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatCardModule} from '@angular/material/card';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {PaginatorModule} from 'primeng/paginator';


//Importando componentes
import { HabitosConsumoComponent } from './components/habitos-consumo/habitos-consumo.component';
import { HistoriaDieteticaComponent } from './components/historia-dietetica/historia-dietetica.component';
import { PlanAlimenticioComponent } from './components/plan-alimenticio/plan-alimenticio.component';
import { DatosMedicosComponent } from './components/datos-medicos/datos-medicos.component';
import { LoginComponent } from './components/login/login.component';
import { RecordatorioComponent } from './components/recordatorio/recordatorio.component';
import { BaseComponent } from './base/base.component';
import { ExamenesLaboratorioComponent } from './components/examenes-laboratorio/examenes-laboratorio.component';
import { ExpedienteMedicoComponent } from './components/expediente-medico/expediente-medico.component';
import { RegistroBeneficiarioComponent } from './components/registro-beneficiario/registro-beneficiario.component';
import { FichaComponent } from './components/ficha/ficha.component';
import { BusquedaExpedienteComponent } from './components/busqueda-expediente/busqueda-expediente.component';
import { RegistroResponsableComponent } from './components/registro-responsable/registro-responsable.component';
import { FichaNutricionComponent } from './components/ficha-nutricion/ficha-nutricion.component';
import { FichaPsicologicaComponent } from './components/ficha-psicologica/ficha-psicologica.component';
import { RegistroPedagogicoComponent } from './components/registro-pedagogico/registro-pedagogico.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecordatorioComponent,
    DatosMedicosComponent,
    HistoriaDieteticaComponent,
    HabitosConsumoComponent,
    PlanAlimenticioComponent,
    BaseComponent,
    ExamenesLaboratorioComponent,
    ExpedienteMedicoComponent,
    RegistroBeneficiarioComponent, 
    FichaComponent, 
    BusquedaExpedienteComponent, 
    RegistroResponsableComponent, 
    FichaNutricionComponent, 
    FichaPsicologicaComponent, 
    RegistroPedagogicoComponent 
  ],
  imports: [
    MatFormFieldModule,
    NgbModule,
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
    MatIconModule,
    MatCardModule,
    FileUploadModule,
    HttpClientModule,
    MessagesModule,
    ToastModule,
    MatSnackBarModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

