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
  selector: 'consulta-psicologica',
  templateUrl: './consulta-psicologica.component.html',
  styleUrls: ['./consulta-psicologica.component.css']
})
export class ConsultaPsicologicaComponent implements OnInit {
  beneficiarioId:any;
  constructor(private _snackBar: MatSnackBar,private router:Router, private activatedRoute: ActivatedRoute,private registroApi:RegistroApiService) { }

  ngOnInit(): void {
    this.beneficiarioId = this.activatedRoute.snapshot.paramMap.get('idBeneficiario');
  }

}
