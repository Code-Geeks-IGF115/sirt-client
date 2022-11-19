import { Component, OnInit } from '@angular/core';

export interface RecordAcademico {
  materia: string;
  nota: number;
}
const ELEMENT_DATA: RecordAcademico[] = [
  {materia: 'Ciencias', nota: 1.3},
];

@Component({
  selector: 'app-registro-pedagogico',
  templateUrl: './registro-pedagogico.component.html',
  styleUrls: ['./registro-pedagogico.component.css']
})

export class RegistroPedagogicoComponent implements OnInit {

  displayedColumns: string[] = ['materia', 'nota','editar','eliminar'];
  dataSource1 = ELEMENT_DATA;
  clickedRows = new Set<RecordAcademico>();
  

  constructor() { }

  ngOnInit(): void {
  }

}


