import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NutricionApiService } from 'src/app/services/nutricion-api.service';
export interface Examen {
  examen?: string;
  fechaPrescripcion?: string;
  fechaRecepcion?: string;
  url?: string;
}
const ELEMENT_DATA: Examen[] = [];

@Component({
  selector: 'app-examenes-laboratorio',
  templateUrl: './examenes-laboratorio.component.html',
  styleUrls: ['./examenes-laboratorio.component.css']
})
export class ExamenesLaboratorioComponent implements OnInit {
  //Definiendo variables
  displayedColumns: string[] = ['examen', 'fechaPrescripcion', 'fechaRecepcion','nombreExam', 'opciones'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<Examen>();
  fileTmp:any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  beneficiarioId:any;
  //formulario
  examenesLaboratorioForms=new FormGroup({
    nombre: new FormControl('',Validators.required),
    fechaPrescripcion:new FormControl('',Validators.required),
    fechaRecepcion:new FormControl(''),
    url:new FormControl('')
  })
  idConsulta:any;
  constructor(private nutricionApi:NutricionApiService, private _snackBar: MatSnackBar,private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idConsulta = this.activatedRoute.snapshot.paramMap.get('idConsulta');
    this.beneficiarioId = this.activatedRoute.snapshot.paramMap.get('idBeneficiario');
  }

  //Función para capturar el archivo
  getFile($event:any): void {
    //obteniendo datos que nos imporatn del doc
    const [file] = $event.target.files;
    this.fileTmp={
      fileRaw: file,
      fileName: file.name
    }
    console.log(this.fileTmp)
    if(this.fileTmp.fileRaw.type=='application/pdf'){
      this._snackBar.open("Se cargó el archivo: "+this.fileTmp.fileName, 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }else{
      this._snackBar.open("Se cargó un archivo erróneo, Intente de nuevo", 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
    
  }

  //funcion para agregar los datos a la tabla
  agregarExamen(form:any,){
    this.dataSource.push({
      examen:form.nombre,
      fechaPrescripcion:form.fechaPrescripcion, 
      fechaRecepcion:form.fechaRecepcion,
      url:this.fileTmp.fileName
    });
    this.dataSource = [...this.dataSource];
  }

  //funcion de guardar el examen medico
  guardarExamen(){
    this.nutricionApi.postExamenLaboratorio(this.dataSource).subscribe(data =>{
      console.log(data);
      this._snackBar.open(data.message, 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
    console.log(this.dataSource)
  }

  //Función para enviar datos y archivo
  sendFile(): void {

  }

}
