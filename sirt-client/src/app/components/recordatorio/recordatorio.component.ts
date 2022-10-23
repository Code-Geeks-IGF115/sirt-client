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
  selector: 'app-recordatorio',
  templateUrl: './recordatorio.component.html',
  styleUrls: ['./recordatorio.component.css']
})
export class RecordatorioComponent implements OnInit {
  //definiendo variables
  recordatorio24HorasForms= new FormGroup({
    desayuno: new FormControl('',Validators.required),
    horaDesayuno:new FormControl('',Validators.required),
    almuerzo:new FormControl('',Validators.required),
    horaAlmuerzo:new FormControl('',Validators.required),
    cena:new FormControl('',Validators.required),
    horaCena:new FormControl('',Validators.required),
    vasosAgua:new FormControl('',Validators.required),
  })
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private nutricionApi:NutricionApiService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  guardarRecordatorio24h(form:any){
    this.nutricionApi.postRecordatorio24H(form).subscribe(data =>{
      console.log(data);
      this._snackBar.open(data.message, 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
    console.log(form)
  }

}
