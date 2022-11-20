import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { RegistroApiService } from 'src/app/services/registro-api.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';
export interface PeriodicElement {
  nombre: string;
  apellidos: string;
}


@Component({
  selector: 'registro',
  templateUrl: './registro-responsable.component.html',
  styleUrls: ['./registro-responsable.component.css']
})
export class RegistroResponsableComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellidos', 'editar', 'borrar'];
  dataSource :any;
  //formulario registro responsable
  registroResponsableForms= new FormGroup({
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
  constructor(private _snackBar: MatSnackBar,private router:Router, private activatedRoute: ActivatedRoute,private registroApi:RegistroApiService,public dialog: MatDialog) { 
    
  }


  ngOnInit(): void {
    this.accionCrud = this.activatedRoute.snapshot.paramMap.get('crud');
    this.duiResponsable = this.activatedRoute.snapshot.paramMap.get('dui');
    if(this.accionCrud === 'editar'){
      this.getDatosResponsable(this.duiResponsable)
      this.getListBeneficiarios(this.duiResponsable)
    }
  }
/*   ngOnChanges(): void {
    this.getListBeneficiarios(this.duiResponsable)
  } */
  //Consultar datos del Responsable
  getDatosResponsable(dui:any){
    this.registroApi.getDatosResponsable(dui).subscribe(data =>{
      this.registroResponsableForms.patchValue(data)
    })
  }
  //Metodo para guardar y editar el responsable
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
  //metodo para cconsultar los beneficiarios que pertenecen a un responsable
  getListBeneficiarios(dui:any){
    this.registroApi.getBeneficiarios(dui)
    .subscribe({
      next:(resultado:any) => {
        this.dataSource=resultado.beneficiarios.map((resultado:any)=>{
          return{
            id:resultado.id,
            nombre: resultado.nombre,
            apellidos: resultado.apellidos
          }
        })
      }
    })
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id:any): void {
    this.dialog.open(ModalEliminarComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:{
        idBeneficiario:id
      }
    });
  }
}
