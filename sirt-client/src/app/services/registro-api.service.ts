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
  //Servicio para guardar los datos del responsable
  postRegistroResponsable(form:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.registroResponsable_url , form)
  }

  //servicio para editar los datos del responsable
  editarDatosResponsable(form:any, dui:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.registroResponsable_url+dui, form)
  }
  //servicio para consultar los datos del resonsable
  getDatosResponsable(dui:any){
    return this.httpClient.get(environment.registroResponsable_url+ dui)
    .pipe(
      map((resultados:any)=>{
        return resultados;
      })
      
    );
  }
  //Servicio para guardar los datos del beneficiario
  postRegistroBeneficiario(form:any, dui:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.registroResponsable_url+dui+'/beneficiario' , form)
  }  
   //servicio para editar los datos del beneficiario
  editarDatosBeneficiario(form:any, id:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.registroBeneficiario_url+id+'/edit', form)
  }
  //servicio para consultar los datos del beneficiario
  getDatosBeneficiario(id:any){
    return this.httpClient.get(environment.registroBeneficiario_url+ id)
    .pipe(
      map((resultados:any)=>{
        return resultados;
      })
      
    );
  }
}
