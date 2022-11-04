import { Component, OnInit } from '@angular/core';

export interface ficha{
  fecha:String;
  medico:String;
}
const ELEMENT_DATA:ficha[]=[
  {fecha: '25/10/2022', medico: 'Dra. Ana Pereira'}
]

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {

  displayedColumns: string[] = ['fecha', 'medico', 'ver'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
