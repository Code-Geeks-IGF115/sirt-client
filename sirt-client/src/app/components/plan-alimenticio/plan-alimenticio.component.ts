import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NutricionApiService } from 'src/app/services/nutricion-api.service';
import { RegistroApiService } from 'src/app/services/registro-api.service';

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
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  comidas:any[]=[];
  unidadesFake:any;
  unidades:any;
  constructor(private nutricionApi:NutricionApiService, private _snackBar: MatSnackBar,
              private router:Router, private activatedRoute: ActivatedRoute,
              private registroApi:RegistroApiService) { }

  ngOnInit(): void {
    this.getListAlimentos();
    
  }
  // metodo consultar la lista de alimentos
  getListAlimentos(){
    this.nutricionApi.getListaAlimentos().subscribe((data:any)=>{
      console.log(data);
      data.forEach((comidas:any)=>{
        this.comidas.push({
          nombre:comidas.nombre,
          id:comidas.id,
          calorias:comidas.calorias,
          carbohidratos:comidas.carbohidratos,
          cantidad:comidas.cantidad,
          grasas:comidas.grasas,
          proteinas:comidas.proteinas
        });
      })
    })
  }
}
