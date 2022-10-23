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
  selector: 'app-habitos-consumo',
  templateUrl: './habitos-consumo.component.html',
  styleUrls: ['./habitos-consumo.component.css']
})
export class HabitosConsumoComponent implements OnInit {
  //definiendo variables
  habitosConsumoForms=new FormGroup({
    leche: new FormControl('',Validators.required),
    vegetales:new FormControl('',Validators.required),
    panFrances:new FormControl('',Validators.required),
    comidaChatarra:new FormControl('',Validators.required),
    cafe:new FormControl('',Validators.required),
    carne:new FormControl('',Validators.required),
    yogurt:new FormControl('',Validators.required),
    fruta:new FormControl('',Validators.required),
    tortilla:new FormControl('',Validators.required),
    dulces:new FormControl('',Validators.required),
    pollo :new FormControl('',Validators.required),
    pescado:new FormControl('',Validators.required),
    otro:new FormControl('',Validators.required),
  })
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private nutricionApi:NutricionApiService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  //metodo para guardar el habito de consumo
  guardarhabitosConsumo(form:any){
    this.nutricionApi.postHabitosConsumo(form).subscribe(data =>{
      console.log(data);
      this._snackBar.open(data.message, 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
    console.log(form)
  }

}
