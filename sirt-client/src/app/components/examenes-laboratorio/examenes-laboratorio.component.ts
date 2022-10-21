import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
