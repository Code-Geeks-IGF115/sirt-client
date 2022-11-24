import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  idConsulta:any;
  accionCrud: any;
  idHabConsumo:any;
  beneficiarioId:any;
  constructor(private nutricionApi:NutricionApiService, private _snackBar: MatSnackBar,private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idConsulta = this.activatedRoute.snapshot.paramMap.get('idConsulta');
    this.accionCrud = this.activatedRoute.snapshot.paramMap.get('crud');
    this.beneficiarioId = this.activatedRoute.snapshot.paramMap.get('idBeneficiario');
    if(this.accionCrud === 'editar'){
      this.getHabitosConsumo(this.idHabConsumo)
    }
  }
  //Consultar datos de los habitos de consumo
  getHabitosConsumo(id:any){
    this.nutricionApi.getHabitosConsumo(id).subscribe(data =>{
      console.log(data)
      this.habitosConsumoForms.patchValue(data)
    })
  }

  //metodo para guardar el habito de consumo
  guardarhabitosConsumo(form:any){
    form.consultaId=this.idConsulta
    if(this.accionCrud==='crear'){
      this.nutricionApi.postHabitosConsumo(form).subscribe(data =>{
        console.log(data);
        this.idHabConsumo=data.id
        this._snackBar.open(data.message, 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        if(data.message=='Hábitos de Consumo Guardado.'){
          this.router.navigate(['nutricion/habitosConsumo/editar/',this.idConsulta])
          this.accionCrud='editar';
        }
      })
    }else if(this.accionCrud === 'editar'){
      this.nutricionApi.editarHabitosConsumo(form, this.idHabConsumo).subscribe(data =>{
        console.log(data);
        this._snackBar.open(data.message, 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      })
    }
  }

}
