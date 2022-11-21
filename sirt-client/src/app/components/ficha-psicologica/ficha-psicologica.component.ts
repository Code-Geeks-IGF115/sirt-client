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
}
const ELEMENT_DATA:ficha[]=[
  {fecha: '25/10/2022', medico: 'Dra. Ana Pereira'}
]
@Component({
  selector: 'app-ficha-psicologica',
  templateUrl: './ficha-psicologica.component.html',
  styleUrls: ['./ficha-psicologica.component.css']
})
export class FichaPsicologicaComponent implements OnInit {
  displayedColumns: string[] = ['fecha', 'medico', 'ver'];
  dataSource = ELEMENT_DATA;
  beneficiarioId:any;
  constructor(private _snackBar: MatSnackBar,private router:Router, private activatedRoute: ActivatedRoute,private registroApi:RegistroApiService) { }

  ngOnInit(): void {
    this.beneficiarioId = this.activatedRoute.snapshot.paramMap.get('idBeneficiario');
  }

}
