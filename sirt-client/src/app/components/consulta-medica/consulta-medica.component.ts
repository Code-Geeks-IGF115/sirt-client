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
@Component({
  selector: 'app-consulta-medica',
  templateUrl: './consulta-medica.component.html',
  styleUrls: ['./consulta-medica.component.css']
})
export class ConsultaMedicaComponent implements OnInit {
  //definiendo variables
  beneficiarioId:any;
  antecedenteMedico:any;
  antecedenteFamiliar:any;
  medicamentoPreescrito:any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  accionCrud: any;
  consultaId: any;
  constructor(private _snackBar: MatSnackBar,private router:Router, private activatedRoute: ActivatedRoute,private registroApi:RegistroApiService,private nutricionApi:NutricionApiService) { }

  ngOnInit(): void {
    this.accionCrud = this.activatedRoute.snapshot.paramMap.get('crud');
    this.beneficiarioId = this.activatedRoute.snapshot.paramMap.get('idBeneficiario');
    this.getDatosBeneficiario(this.beneficiarioId)
  }
  //Metodo para consultar los datos del beneficiario
  getDatosBeneficiario(id:any){
    this.registroApi.getDatosBeneficiario(id).subscribe(data =>{
      this.antecedenteMedico=data.datosMedicos.antecedentesMedicos;
      this.antecedenteFamiliar=data.datosMedicos.antecedentesFamiliares;
      this.medicamentoPreescrito=data.datosMedicos.medicamentosPrescritos;
    })
  }

}
