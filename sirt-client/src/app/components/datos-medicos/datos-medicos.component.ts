import { Component, OnInit, OnChanges } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NutricionApiService } from 'src/app/services/nutricion-api.service';
import { RegistroApiService } from 'src/app/services/registro-api.service';

@Component({
  selector: 'app-datos-medicos',
  templateUrl: './datos-medicos.component.html',
  styleUrls: ['./datos-medicos.component.css']
})
export class DatosMedicosComponent implements OnInit {
  //formulario datos medicos
  datosMedicosForms= new FormGroup({
    antecedentesMedicos: new FormControl(''),
    antecedentesFamiliares:new FormControl(''),
    medicamentosPrescritos:new FormControl(''),
    consultaId:new FormControl(''),
    beneficiarioId:new FormControl('')
  });
  //formulario datos antropometricos
  datosAntropometricosForms= new FormGroup({
    pesoActual:new FormControl('',Validators.required),
    pesoMeta:new FormControl('',Validators.required),
    pesoIdeal:new FormControl('',Validators.required),
    grasaViceral:new FormControl('',Validators.required),
    grasaMuscular:new FormControl('',Validators.required),
    cCintura:new FormControl('',Validators.required),
    cCadera:new FormControl('',Validators.required),
    cMuneca:new FormControl('',Validators.required),
    cBrazoRelajado:new FormControl('',Validators.required),
    cBrazoContraido:new FormControl('',Validators.required),
    altura:new FormControl('',Validators.required),
    indiceMasaCorporal:new FormControl('',Validators.required),
    diagnostico:new FormControl(''),
    consultaId:new FormControl('')
  });
  //position message
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  idConsulta:any;
  msgDatosMed:any;
  msgAntro:any
  idMedicos:any;
  idAntro:any;
  accionCrud: any;
  idBeneficiario:any;
  antecedenteMedico:any;
  antecedenteFamiliar:any;
  medicamentoPreescrito:any;
  beneficiarioId:any;
  constructor(private nutricionApi:NutricionApiService, private _snackBar: MatSnackBar,
              private router:Router, private activatedRoute: ActivatedRoute,
              private registroApi:RegistroApiService) { }

  ngOnInit(): void {
    this.idConsulta = this.activatedRoute.snapshot.paramMap.get('idConsulta');
    this.accionCrud = this.activatedRoute.snapshot.paramMap.get('crud');
    this.beneficiarioId = this.activatedRoute.snapshot.paramMap.get('idBeneficiario');
    this.getDatosBeneficiario(this.beneficiarioId)
    if(this.accionCrud === 'editar'){
      this.getDatosMedicos(this.idBeneficiario)
      this.getDatosAntropometricos(this.idAntro)
    }
    
  }
  //Consultar Datos medicos
  getDatosMedicos(idMedicos:any){
    this.nutricionApi.getDatosMedicos(idMedicos).subscribe(data =>{
      console.log(data)
      this.datosMedicosForms.patchValue(data)
    })
  }
  //Consultar Datos antropometricos
  getDatosAntropometricos(idAntro:any){
    this.nutricionApi.getDatosAntropometricos(idAntro).subscribe(data =>{
      console.log(data)
      this.datosMedicosForms.patchValue(data)
    })
  }

  //metodo para guardar los datos medicos
  guardarDatos(datosMedicos:any, datosAntropometricos:any){
    if(this.accionCrud==='crear'){
        //para guardar datos medicos
      datosMedicos.consultaId=this.idConsulta
      this.nutricionApi.postDatosMedicos(datosMedicos, this.beneficiarioId).subscribe(data =>{
        console.log(data);
        this.idMedicos=data.id;
        this.idBeneficiario=data.beneficiarioId;
        this.msgDatosMed=data.message
      })
      //para guardar datos antropometricos
      datosAntropometricos.consultaId=this.idConsulta
      this.nutricionApi.postDatosAntropometricos(datosAntropometricos, this.beneficiarioId).subscribe(data =>{
        console.log(data);
        this.idAntro=data.id
        this.msgAntro=data.message
      })
      if((this.msgDatosMed=='Datos medicos guardados')&&(this.msgAntro=='Datos antropométricos guardados.')){
        this._snackBar.open('Datos médicos y antropométricos guardados', 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.router.navigate(['nutricion/datosMedicos/editar/',this.idConsulta])
        this.accionCrud='editar';
      }
    }else  if(this.accionCrud === 'editar') {
      datosMedicos.consultaId=this.idConsulta
      datosMedicos.beneficiarioId=this.idBeneficiario
      this.nutricionApi.editarDatosMedicos(datosMedicos,this.idMedicos ).subscribe(data =>{
        console.log(data)
        this.msgDatosMed=data.message
      })
      datosAntropometricos.consultaId=this.idConsulta
      this.nutricionApi.editarDatosAntro(datosAntropometricos,this.idAntro ).subscribe(data =>{
        console.log(data)
        this.msgAntro=data.message
      })
      if((this.msgDatosMed=='Datos Médicos Modificados.')&&(this.msgAntro=='Datos Antropometricos modificados.')){
        this._snackBar.open('Datos médicos y antropométricos modificados', 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    }
    
  }
  //Metodo para consultar los datos del beneficiario
  getDatosBeneficiario(id:any){
    this.registroApi.getDatosBeneficiario(id).subscribe(data =>{
      this.antecedenteMedico=data.datosMedicos.antecedentesMedicos;
      this.antecedenteFamiliar=data.datosMedicos.antecedentesFamiliares;
      this.medicamentoPreescrito=data.datosMedicos.medicamentosPrescritos;
      console.log(data)
    })
  }

}
