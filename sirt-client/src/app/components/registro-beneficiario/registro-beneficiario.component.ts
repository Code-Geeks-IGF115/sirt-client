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
  selector: 'app-registro-beneficiario',
  templateUrl: './registro-beneficiario.component.html',
  styleUrls: ['./registro-beneficiario.component.css']
})
export class RegistroBeneficiarioComponent implements OnInit {
  //formulario registro beneficiario
  registroBeneficiarioForms= new FormGroup({
    nombre: new FormControl('',Validators.required),
    apellidos:new FormControl('',Validators.required),
    fechaNacimiento:new FormControl('',Validators.required),
    sexo:new FormControl('',Validators.required),
    antecedentesFamiliares:new FormControl(''),
    antecedentesMedicos:new FormControl(''),
    medicamentosPrescritos:new FormControl('')
  });
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  accionCrud: any;
  duiResponsable:any;
  beneficiarioId:any;
  fecha:any;
  antecedenteMedico:any;
  antecedenteFamiliar:any;
  medicamentoPreescrito:any;

  constructor(private _snackBar: MatSnackBar,private router:Router, private activatedRoute: ActivatedRoute,private registroApi:RegistroApiService) { }

  ngOnInit(): void {
    this.accionCrud = this.activatedRoute.snapshot.paramMap.get('crud');
    this.beneficiarioId = this.activatedRoute.snapshot.paramMap.get('idBeneficiario');
    this.duiResponsable= this.activatedRoute.snapshot.paramMap.get('dui');
    if(this.accionCrud === 'editar'){
      this.getDatosBeneficiario(this.beneficiarioId)
    }
  }
  //Metodo para consultar los datos del beneficiario
  getDatosBeneficiario(id:any){
    this.registroApi.getDatosBeneficiario(id).subscribe(data =>{
      this.fecha=new Date(data.fechaNacimiento);
      /* this.antecedenteMedico=data.datosMedicos.antecedentesMedicos;
      this.antecedenteFamiliar=data.datosMedicos.antecedentesFamiliares;
      this.medicamentoPreescrito=data.datosMedicos.medicamentosPrescritos; */
      this.registroBeneficiarioForms.patchValue(data);
      this.registroBeneficiarioForms.patchValue(data.datosMedicos);
    })
  }
  //Metodo para guardar y editar un beneficiario
  guardarResponsable(form:any){
    if(this.accionCrud==='crear'){
      this.registroApi.postRegistroBeneficiario(form,this.duiResponsable).subscribe(data =>{
        this.beneficiarioId=data.beneficiarioId;
        this._snackBar.open(data.message, 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        if(data.message=='Beneficiario guardado con éxito'){
          this.router.navigate(['registro/responsable/'+this.duiResponsable+'/beneficiario/editar/'+this.beneficiarioId])
          this.accionCrud='editar';
        }
      })
    }else if(this.accionCrud === 'editar'){
      this.registroApi.editarDatosBeneficiario(form, this.beneficiarioId).subscribe(data =>{
        this._snackBar.open(data.message, 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      })
    }

  }

}
