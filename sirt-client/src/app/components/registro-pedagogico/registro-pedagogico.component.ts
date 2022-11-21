import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
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

  constructor() { }

  ngOnInit(): void {
  }
  //metodo para agregar el record academico a la tabla
  agrearRecordAcademico(form:any){
    this.registroPedagogico.value.recordAcademicos=this.dataSource;
    this.dataSource.push({
      materia:form.materia,
      nota: form.nota
    });
    this.dataSource = [...this.dataSource];
    console.log(this.dataSource)
    console.log(this.registroPedagogico)
  }
  //Metodo para guardar y editar el registro pedagogico
  guardarRegistroPedagogico()
  {
    
  }
}


