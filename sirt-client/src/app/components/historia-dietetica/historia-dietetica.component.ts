import { Component, OnInit } from '@angular/core';

interface Unit {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'historia-dietetica',
  templateUrl: './historia-dietetica.component.html',
  styleUrls: ['./historia-dietetica.component.css']
})

export class HistoriaDieteticaComponent implements OnInit {
  
  constructor() {
  
   }

  ngOnInit(): void {
  }
  units: Unit[] = [
    {value: 'uno-0', viewValue: '1'},
    {value: 'dos-1', viewValue: '2'},
    {value: 'tres-2', viewValue: '3'},
    {value: 'cuatro-3', viewValue: '4'},
  ];
  
}

