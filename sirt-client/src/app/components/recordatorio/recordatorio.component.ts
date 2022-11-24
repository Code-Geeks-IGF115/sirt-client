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
    consultaId:new FormControl(''),
  })
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  idConsulta:any;
  accionCrud: any;
  idRecordatorio: any;
  beneficiarioId:any;
  constructor(private nutricionApi:NutricionApiService, private _snackBar: MatSnackBar,private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idConsulta = this.activatedRoute.snapshot.paramMap.get('idConsulta');
    this.accionCrud = this.activatedRoute.snapshot.paramMap.get('crud');
    this.beneficiarioId = this.activatedRoute.snapshot.paramMap.get('idBeneficiario');
    if(this.accionCrud === 'editar'){
      this.getRecordatorio24H(this.idRecordatorio)
    }
  }

  //metodo para consultar el recordatorio de 24 horas
  getRecordatorio24H(id:any){
    this.nutricionApi.getRecordatorio24H(id).subscribe(data =>{
      console.log(data)
      this.recordatorio24HorasForms.patchValue(data)
    })
  }
  //metodo para guardar el recordatorio de 24 horas
  guardarRecordatorio24h(form:any){
    form.consultaId=this.idConsulta
    if(this.accionCrud==='crear'){
      this.nutricionApi.postRecordatorio24H(form).subscribe(data =>{
        console.log(data);
        this.idRecordatorio=data.id
        this._snackBar.open(data.message, 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        if(data.message=='Recordatorio de 24 horas guardado.'){
          this.router.navigate(['nutricion/recordatorio24Horas/editar/',this.idConsulta])
          this.accionCrud='editar';
        }
      })
    }else if(this.accionCrud === 'editar'){
      this.nutricionApi.editarRecordatorio24H(form, this.idRecordatorio).subscribe(data =>{
        console.log(data);
        this._snackBar.open(data.message, 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      })
    }
    
  }

}
