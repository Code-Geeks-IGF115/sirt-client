import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { RegistroApiService } from 'src/app/services/registro-api.service';
export interface PeriodicElement {
  nombre: string;
  apellidos: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nombre: 'Cesar', apellidos: 'rivas'},
];
@Component({
  selector: 'registro',
  templateUrl: './registro-responsable.component.html',
  styleUrls: ['./registro-responsable.component.css']
})
export class RegistroResponsableComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellidos', 'editar', 'borrar'];
  dataSource = ELEMENT_DATA;
  //formulario registro responsable
  registroBeneficiarioForms= new FormGroup({
    dui: new FormControl('',Validators.required),
    nombre:new FormControl('',Validators.required),
    apellidos:new FormControl('',Validators.required),
    direccion:new FormControl('',Validators.required),
    telefono:new FormControl('',Validators.required),
    fechaNacimiento:new FormControl('',Validators.required)
  });
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  accionCrud: any;
  duiResponsable:any;
  constructor(private _snackBar: MatSnackBar,private router:Router, private activatedRoute: ActivatedRoute,private registroApi:RegistroApiService) { }

  ngOnInit(): void {
    this.accionCrud = this.activatedRoute.snapshot.paramMap.get('crud');
    this.duiResponsable = this.activatedRoute.snapshot.paramMap.get('dui');
    if(this.accionCrud === 'editar'){
      this.getDatosResponsable(this.duiResponsable)
    }
  }
  //Consultar datos del Responsable
  getDatosResponsable(dui:any){
    this.registroApi.getDatosResponsable(dui).subscribe(data =>{
      console.log(data)
      this.registroBeneficiarioForms.patchValue(data)
    })
  }
  //Metodo para guardar el responsable
  guardarResponsable(form:any){
    if(this.accionCrud==='crear'){
      this.registroApi.postRegistroResponsable(form).subscribe(data =>{
        console.log(data);
        this.duiResponsable=data.dui;
        this._snackBar.open(data.message, 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        if(data.message=='Responsable Registrado'){
          this.router.navigate(['registro/responsable/editar/',this.duiResponsable])
          this.accionCrud='editar';
        }
      })
    }else if(this.accionCrud === 'editar'){
      this.registroApi.editarDatosResponsable(form, this.duiResponsable).subscribe(data =>{
        this._snackBar.open(data.message, 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      })
    }

  }
}
