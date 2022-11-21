import { Component, OnInit } from '@angular/core';
import { RegistroApiService } from 'src/app/services/registro-api.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ModalBusquedaComponent } from '../modal-busqueda/modal-busqueda.component';
export interface Prueba {
  nombre: string;
  apellido: string;
  verExpediente: string;
  editar: string;
}



@Component({
  selector: 'app-busqueda-expediente',
  templateUrl: './busqueda-expediente.component.html',
  styleUrls: ['./busqueda-expediente.component.css']
})
export class BusquedaExpedienteComponent implements OnInit {
  duiForms= new FormGroup({
    dui: new FormControl('')
  });

  columns: string[] = ['nombres', 'apellidos', 'verExpedientes', 'editar'];
  dataSource:any;

  constructor(private router:Router, private activatedRoute: ActivatedRoute,
              private registroApi:RegistroApiService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
   //metodo para cconsultar los beneficiarios que pertenecen a un responsable
  getListBeneficiarios(dui:any){
    this.registroApi.getBeneficiarios(dui)
    .subscribe({
      next:(resultado:any) => {
        if(resultado!= null){
          this.dataSource=resultado.beneficiarios.map((resultado:any)=>{
            return{
              id:resultado.id,
              nombre: resultado.nombre,
              apellidos: resultado.apellidos
            }
          });
        }else{
          this.openDialog('0ms', '0ms');
        }
      }
    })
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalBusquedaComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        interfaz:'busquedaExpediente'
      }
    });
  }
}
