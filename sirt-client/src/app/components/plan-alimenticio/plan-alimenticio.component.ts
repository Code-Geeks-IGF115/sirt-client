import { Component, OnInit } from '@angular/core';

export interface PlanAlimenticio {
  dia: string;
  tiempo: string;
  comida: string;
  cantidad:number;
  unidad:number;
  proteina:number;
  grasa:number;
  carbohidrato:number;
  caloria:number;
}
const ELEMENT_DATA: PlanAlimenticio[] = []

@Component({
  selector: 'app-plan-alimenticio',
  templateUrl: './plan-alimenticio.component.html',
  styleUrls: ['./plan-alimenticio.component.css']
})
export class PlanAlimenticioComponent implements OnInit {
  displayedColumns: string[] = ['dia', 'tiempo', 'comida', 'cantidad', 'unidad', 'proteina', 'grasa', 'carbohidrato','caloria'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PlanAlimenticio>();

  constructor() { }

  ngOnInit(): void {
  }

}
