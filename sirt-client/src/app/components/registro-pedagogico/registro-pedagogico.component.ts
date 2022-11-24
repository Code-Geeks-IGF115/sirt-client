import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { RegistroApiService } from 'src/app/services/registro-api.service';
export interface RecordAcademico {
  materia?: string;
  nota?: number;
}

const ELEMENT_DATA: RecordAcademico[] = [];
@Component({
  selector: 'app-registro-pedagogico',
  templateUrl: './registro-pedagogico.component.html',
  styleUrls: ['./registro-pedagogico.component.css']
})

export class RegistroPedagogicoComponent implements OnInit {

  displayedColumns: string[] = ['materia', 'nota','editar','eliminar'];
  dataSource = ELEMENT_DATA;
  //Formulario record academico 
  recordAcademicoForms= new FormGroup({
    materia: new FormControl('',Validators.required),
    nota: new FormControl('',Validators.required),
  });
  //Formulario del registro -pedagogico
  registroPedagogico = new FormGroup({
    centroDeEstudio: new FormControl('',Validators.required),
    nivelAcademicoEnCurso:new FormControl('',Validators.required),
    gradoEnCurso: new FormControl('',Validators.required),
    rendimientoAcademico:new FormControl('',Validators.required),
    recordAcademicos: new FormControl(),
  });
  beneficiarioId:any;
  consultaid:any;
  accionCrud: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _snackBar: MatSnackBar,private router:Router, private activatedRoute: ActivatedRoute,private registroApi:RegistroApiService) { }

  ngOnInit(): void {
    this.accionCrud = this.activatedRoute.snapshot.paramMap.get('crud');
    this.beneficiarioId = this.activatedRoute.snapshot.paramMap.get('idBeneficiario');
    this.consultaid= this.activatedRoute.snapshot.paramMap.get('idConsulta');
    if(this.accionCrud === 'editar'){
      this.getRecordAcademico(this.beneficiarioId, this.consultaid);
    }
  }
  //metodo para agregar el record academico a la tabla
  agrearRecordAcademico(form:any){
    this.registroPedagogico.value.recordAcademicos=this.dataSource;
    this.dataSource.push({
      materia:form.materia,
      nota: form.nota
    });
    this.dataSource = [...this.dataSource];
  }
  //metodo para consultar el record academico
  getRecordAcademico(id:any, idConsulta:any){
    this.registroApi.getRegistroPedagogico(id, idConsulta).subscribe(data =>{
      this.registroPedagogico.patchValue(data);
    })
  }
  //Metodo para guardar y editar el registro pedagogico
  guardarRegistroPedagogico(form:any)
  {
    if(this.accionCrud==='crear'){
      console.log(form)
      this.registroApi.postRegistroPedagogico(form, this.beneficiarioId, this.consultaid).subscribe(data =>{
        console.log(data);
        this._snackBar.open(data.message, 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        if(data.message=='Responsable Registrado'){
          this.router.navigate(['beneficiario/'+this.beneficiarioId+'/consultaPsicologica/'+this.consultaid+'/registroPedagogico/edit'])
          this.accionCrud='editar';
        }
      })
    }else if(this.accionCrud === 'editar'){
      this.registroApi.editarRegistroPedagogico(form, this.beneficiarioId, this.consultaid).subscribe(data =>{
        this._snackBar.open(data.message, 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      })
    }    
  }
}


