import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NutricionApiService } from 'src/app/services/nutricion-api.service';

@Component({
  selector: 'app-historia-dietetica',
  templateUrl: './historia-dietetica.component.html',
  styleUrls: ['./historia-dietetica.component.css']
})
export class HistoriaDieteticaComponent implements OnInit {
  //formulario historia dietetica
  historiaDieteticaForms= new FormGroup({
    actividadFisica: new FormControl('',Validators.required),
    consumoAlcohol: new FormControl('',Validators.required),
    consumoTabaco: new FormControl('',Validators.required),
    preferenciaAlimenticia: new FormControl('',Validators.required),
    alimentosNoPreferidos: new FormControl('',Validators.required),
    alergias: new FormControl('',Validators.required),
    lugarDeComida: new FormControl('',Validators.required),
    quienPreparaAlimentos: new FormControl('',Validators.required),
    horasDeSueno: new FormControl('',Validators.required),
    consultaId: new FormControl('',Validators.required),
  });

  //position message
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private nutricionApi:NutricionApiService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  //metodo para guardar la historia dietetica
  guardarHistoriaDietetica(form:any){
    this.nutricionApi.postHistoriaDietetica(form).subscribe(data =>{
      console.log(data);
      this._snackBar.open(data.message, 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
    console.log(form)
  }

}
