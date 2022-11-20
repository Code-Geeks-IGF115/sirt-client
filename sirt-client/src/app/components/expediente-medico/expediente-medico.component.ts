import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { RegistroApiService } from 'src/app/services/registro-api.service';
@Component({
  selector: 'app-expediente-medico',
  templateUrl: './expediente-medico.component.html',
  styleUrls: ['./expediente-medico.component.css']
})
export class ExpedienteMedicoComponent implements OnInit {
  //formulario expediente medico
  expedienteBeneficiarioForms= new FormGroup({
    nombre: new FormControl(''),
    apellidos:new FormControl(''),
    edad:new FormControl(),
    sexo:new FormControl(''),
    antecedentesFamiliares:new FormControl(''),
    antecedentesMedicos:new FormControl(''),
    medicamentosPrescritos:new FormControl('')
  });
  beneficiarioId:any;
  fechaNacimiento:any;
  edad:any;
  constructor(private _snackBar: MatSnackBar,private router:Router, private activatedRoute: ActivatedRoute,private registroApi:RegistroApiService) { }

  ngOnInit(): void {
    this.beneficiarioId = this.activatedRoute.snapshot.paramMap.get('idBeneficiario');
    this.getDatosBeneficiario(this.beneficiarioId)
  }
  getDatosBeneficiario(id:any){
    
    this.registroApi.getDatosBeneficiario(id).subscribe(data =>{
      console.log(data)
      this.fechaNacimiento=new Date(data.fechaNacimiento);
      const timeDiff = Math.abs(Date.now() - this.fechaNacimiento.getTime());
      this.edad=Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      this.expedienteBeneficiarioForms.patchValue(data)
    })
  }

}
