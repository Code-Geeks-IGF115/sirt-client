import { Component, OnInit } from '@angular/core';

export interface Prueba {
  nombre: string;
  apellido: string;
  verExpediente: string;
  editar: string;
}

const ELEMENT_DATA: Prueba[] = [
  {nombre:'nombre1',apellido:'apellido1',verExpediente:'',editar:''},
];

@Component({
  selector: 'app-busqueda-expediente',
  templateUrl: './busqueda-expediente.component.html',
  styleUrls: ['./busqueda-expediente.component.css']
})
export class BusquedaExpedienteComponent implements OnInit {

  columns: string[] = ['nombres', 'apellidos', 'verExpedientes', 'editar'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
