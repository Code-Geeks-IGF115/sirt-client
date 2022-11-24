import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { RegistroApiService } from 'src/app/services/registro-api.service';
export interface ficha{
  fecha:String;
  medico:String;
  consultaid:String;
}
const ELEMENT_DATA:ficha[]=[]
@Component({
  selector: 'app-ficha-psicologica',
  templateUrl: './ficha-psicologica.component.html',
  styleUrls: ['./ficha-psicologica.component.css']
})
export class FichaPsicologicaComponent implements OnInit {
   //formulario expediente medico
   datosBeneficiarioForms= new FormGroup({
    nombre: new FormControl(''),
    apellidos:new FormControl(''),
    edad:new FormControl(),
    sexo:new FormControl(''),
  });
  displayedColumns: string[] = ['fecha', 'medico', 'ver'];
  dataSource :any[]=[];
  beneficiarioId:any;
  fechaNacimiento:any;
  edad:any;
  constructor(private _snackBar: MatSnackBar,private router:Router, private activatedRoute: ActivatedRoute,private registroApi:RegistroApiService) { }

  ngOnInit(): void {
    this.beneficiarioId = this.activatedRoute.snapshot.paramMap.get('idBeneficiario');
    this.getDatosBeneficiario(this.beneficiarioId)
    this.getListaConsultas(this.beneficiarioId)
  }
  //Metodo para consultar los datos del beneficiario
  getDatosBeneficiario(id:any){
    this.registroApi.getDatosBeneficiario(id).subscribe(data =>{
      console.log(data)
      this.fechaNacimiento=new Date(data.fechaNacimiento);
      const timeDiff = Math.abs(Date.now() - this.fechaNacimiento.getTime());
      this.edad=Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      this.datosBeneficiarioForms.patchValue(data)
    })
  }
  //metodo para consultar la lista de las consultas medicas
  getListaConsultas(id:any){
    this.registroApi.getConsultasPsicologicas(id)
    .subscribe((resultado:any)=>{
      resultado.forEach((resultado:any)=>{
        this.dataSource.push({
          fecha:resultado.consulta.createdAt,
          doctor:resultado.consulta.doctor.nombre,
          consultaId:resultado.consulta.id
        })
        this.dataSource=[...this.dataSource]
      })
    })
      /* next:(resultado:any) =>{
        this.dataSource=resultado.consulta.map((resultado:any)=>{
          return{
            fecha:resultado.consulta.createdAt,
            doctor:resultado.doctor.nombre,
            consultaId:resultado.consulta.id
          }
        })
      } */
   
  }
}
