import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  nombre: string;
  apellidos: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nombre: 'Cesar', apellidos: 'rivas'},
];
@Component({
  selector: 'registro',
  templateUrl: './registro-responsable.component.html',
  styleUrls: ['./registro-responsable.component.css']
})
export class RegistroResponsableComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellidos', 'editar', 'borrar'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
