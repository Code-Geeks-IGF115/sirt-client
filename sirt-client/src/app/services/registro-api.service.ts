import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroApiService {

  constructor(private httpClient: HttpClient) { }
  //Servicio para guardar los datos del beneficiario
  postRegistroResponsable(form:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.registro_url , form)
  }
  //servicio para editar los datos del beneficiario
  editarDatosResponsable(form:any, dui:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.registro_url+dui, form)
  }
  //servicio para consultar los datos antropometricos
  getDatosResponsable(dui:any){
    return this.httpClient.get(environment.registro_url+ dui)
    .pipe(
      map((resultados:any)=>{
        return resultados;
      })
      
    );
  }
}
