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
  selector: 'app-datos-medicos',
  templateUrl: './datos-medicos.component.html',
  styleUrls: ['./datos-medicos.component.css']
})
export class DatosMedicosComponent implements OnInit {
  //formulario datos medicos
  datosMedicosForms= new FormGroup({
    antecedentesMedicos: new FormControl('',Validators.required),
    antecedentesFamiliares:new FormControl('',Validators.required),
    medicamentosPrescritos:new FormControl('',Validators.required)
  });
  //formulario datos antropometricos
  datosAntropometricosForms= new FormGroup({
    pesoActual:new FormControl('',Validators.required),
    pesoMeta:new FormControl('',Validators.required),
    pesoIdeal:new FormControl('',Validators.required),
    grasaViceral:new FormControl('',Validators.required),
    grasaMuscular:new FormControl('',Validators.required),
    cCintura:new FormControl('',Validators.required),
    cCadera:new FormControl('',Validators.required),
    cMuneca:new FormControl('',Validators.required),
    cBrazoRelajado:new FormControl('',Validators.required),
    cBrazoContraido:new FormControl('',Validators.required),
    altura:new FormControl('',Validators.required),
    indiceMasaCorporal:new FormControl('',Validators.required),
    diagnostico:new FormControl('',Validators.required),
  });
  //position message
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private nutricionApi:NutricionApiService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  //metodo para guardar los datos medicos
  guardarDatos(datosMedicos:any, datosAntropometricos:any){
    //para guardar datos medicos
    this.nutricionApi.postDatosMedicos(datosMedicos).subscribe(data =>{
      console.log(data);
      this._snackBar.open(data.message, 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
    //para guardar datos antropometricos
    this.nutricionApi.postDatosAntropometricos(datosAntropometricos).subscribe(data =>{
      console.log(data);
      this._snackBar.open(data.message, 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
    console.log(datosMedicos)
    console.log(datosAntropometricos)
  }

}
