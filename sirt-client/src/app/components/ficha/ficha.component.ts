import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { RegistroApiService } from 'src/app/services/registro-api.service';
import { NutricionApiService } from 'src/app/services/nutricion-api.service';
export interface ficha{
  fecha:String;
  medico:String;
}
const ELEMENT_DATA:ficha[]=[]

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {

  //formulario expediente medico
  datosBeneficiarioForms= new FormGroup({
    nombre: new FormControl(''),
    apellidos:new FormControl(''),
    edad:new FormControl(),
    sexo:new FormControl(''),
  });

  displayedColumns: string[] = ['fecha', 'medico', 'ver'];
  dataSource = ELEMENT_DATA;
  beneficiarioId:any;
  fechaNacimiento:any;
  edad:any;
  constructor(private _snackBar: MatSnackBar,private router:Router, private activatedRoute: ActivatedRoute,private registroApi:RegistroApiService,private nutricionApi:NutricionApiService) { }

  ngOnInit(): void {
    this.beneficiarioId = this.activatedRoute.snapshot.paramMap.get('idBeneficiario');
    this.getDatosBeneficiario(this.beneficiarioId)
    this.getListaConsultas(this.beneficiarioId)
  }
  //Metodo para consultar los datos del beneficiario
  getDatosBeneficiario(id:any){
    this.registroApi.getDatosBeneficiario(id).subscribe(data =>{
      this.fechaNacimiento=new Date(data.fechaNacimiento);
      const timeDiff = Math.abs(Date.now() - this.fechaNacimiento.getTime());
      this.edad=Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      this.datosBeneficiarioForms.patchValue(data)
    })
  }
  //metodo para consultar la lista de las consultas medicas
  getListaConsultas(id:any){
    this.registroApi.getConsultasMedicas(id)
    .subscribe({
      next:(resultado:any) =>{
        this.dataSource=resultado.consultas.map((resultado:any)=>{
          console.log(resultado.consultas);
          return{
            fecha:resultado.createdAt,
            doctor:resultado.doctor.nombre
          }
        })
      }
    });
  }

}
