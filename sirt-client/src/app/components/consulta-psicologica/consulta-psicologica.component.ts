import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { RegistroApiService } from 'src/app/services/registro-api.service';
@Component({
  selector: 'consulta-psicologica',
  templateUrl: './consulta-psicologica.component.html',
  styleUrls: ['./consulta-psicologica.component.css']
})
export class ConsultaPsicologicaComponent implements OnInit {
  //Definiendo formulario de planterapeutico
  planTerapeuticoForms=new FormGroup ({
    motivoDeLaConsulta: new FormControl(''),
    examenMental: new FormControl(''),
    diagnostico:new FormControl(''),
    planDeTratamiento: new FormControl('')
  })
  
  beneficiarioId:any;
  antecedenteMedico:any;
  antecedenteFamiliar:any;
  medicamentoPreescrito:any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  accionCrud: any;
  consultaId: any;
  planTerapeuticoId:any;
  constructor(private _snackBar: MatSnackBar,private router:Router, private activatedRoute: ActivatedRoute,private registroApi:RegistroApiService) { }

  ngOnInit(): void {
    this.accionCrud = this.activatedRoute.snapshot.paramMap.get('crud');
    this.beneficiarioId = this.activatedRoute.snapshot.paramMap.get('idBeneficiario');
    this.getDatosBeneficiario(this.beneficiarioId)
    if(this.accionCrud === 'editar'){
      this.consultaId = this.activatedRoute.snapshot.paramMap.get('idConsulta');
      this.getPlanTerapeutico(this.beneficiarioId, this.consultaId)
    }
  }
  //Metodo para consultar los datos del beneficiario
  getDatosBeneficiario(id:any){
    this.registroApi.getDatosBeneficiario(id).subscribe(data =>{
      this.antecedenteMedico=data.datosMedicos.antecedentesMedicos;
      this.antecedenteFamiliar=data.datosMedicos.antecedentesFamiliares;
      this.medicamentoPreescrito=data.datosMedicos.medicamentosPrescritos;
    })
  }
  //Metodo para consultar los datos del beneficiario
  getPlanTerapeutico(id:any, consultaId:any){
    this.registroApi.getPlanTerapeutico(id, consultaId).subscribe(data =>{
      this.planTerapeuticoForms.patchValue(data);
    })
  }
  //metodo para guardar y editar el planterapeutico 
  guardarPlanterapeutico(form:any){
    if(this.accionCrud==='crear'){
      this.registroApi.postPlanTerapeutico(form,this.beneficiarioId).subscribe(data =>{
        console.log(data);
        this.consultaId=data.consultaId;
        this.planTerapeuticoId=data.planTerapeuticoId;
        this._snackBar.open(data.message, 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        if(data.message=='Consulta creada'){
          this.router.navigate(['beneficiario/'+this.beneficiarioId+'/consultaPsicologica/datosMedicos/editar/'+this.consultaId])
          this.accionCrud='editar';
        }
      })
    }else if(this.accionCrud === 'editar'){
      this.registroApi.editarPlanTerapeutico(form, this.beneficiarioId, this.consultaId).subscribe(data =>{
        console.log(data);
        this._snackBar.open(data.message, 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      })
    }
  }

}
