import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export interface PeriodicElement {
  examen: string;
  fechaPrescripcion: string;
  fechaRecepcion: string;
}
const ELEMENT_DATA: PeriodicElement[] = [{examen: 'prueba', fechaPrescripcion:'prueba',fechaRecepcion:'prueba'}]

@Component({
  selector: 'app-examenes-laboratorio',
  templateUrl: './examenes-laboratorio.component.html',
  styleUrls: ['./examenes-laboratorio.component.css']
})
export class ExamenesLaboratorioComponent implements OnInit {
  displayedColumns: string[] = ['examen', 'fechaPrescripcion', 'fechaRecepcion', 'opciones'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  private fileTmp:any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
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

  //Función para enviar datos y archivo
  sendFile(): void {

  }

}
