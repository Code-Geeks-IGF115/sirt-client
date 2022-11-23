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
    return this.httpClient.post<ResponseI>('https://sirt-igf115-prn315.herokuapp.com/responsable/'+dui+'/beneficiario' , form)
  }  
   //servicio para editar los datos del beneficiario
  editarDatosBeneficiario(form:any, id:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.registroBeneficiario_url+id+'/edit', form)
  }
  //servicio para guardar la consulta psicologica, plan terapeutico
  postPlanTerapeutico(form:any, id:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.registroBeneficiario_url+id+'/ficha/psicologica' , form)
  }
  //servicio para editar los datos del beneficiario
  editarPlanTerapeutico(form:any, id:any, idConsulta:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.registroBeneficiario_url+id+'/ficha/psicologica/'+idConsulta, form)
  }
  //servicio para guardar el registro pedagogico
  postRegistroPedagogico(form:any, id:any, idConsulta:any){
    return this.httpClient.post<ResponseI>(environment.registroBeneficiario_url+id+'/ficha/terapeutica/'+idConsulta, form)
  }
  //servicio para editar el registro pedagogico
  editarRegistroPedagogico(form:any, id:any, idConsulta:any){
    return this.httpClient.post<ResponseI>(environment.registroBeneficiario_url+id+'/ficha/terapeutica/'+idConsulta, form)
  }
  //servicio para consultar para consultar el registro pedagogico
  getRegistroPedagogico(id:any, idConsulta:any){
    return this.httpClient.get(environment.registroBeneficiario_url+ id+'/ficha/terapeutica/'+idConsulta)
    .pipe(
      map((resultados:any)=>{
        return resultados;
      })
    );
  }

  //servicio para consultar los datos del beneficiario
  getPlanTerapeutico(id:any, idConsulta:any){
    return this.httpClient.get(environment.registroBeneficiario_url+ id+'/ficha/psicologica/'+idConsulta)
    .pipe(
      map((resultados:any)=>{
        return resultados;
      })
    );
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
  //metodo para consultar los beneficiarios que pertenecen a un responsable
  getBeneficiarios(dui:any){
    return this.httpClient.get(environment.registroResponsable_url+dui+'/beneficiario')
    .pipe(
      map((resultados:any)=>{
        return resultados;
      })
      
    );
  }
  //metodo para consultar la lista de consultas medicas
  getConsultasMedicas(id:any){
    return this.httpClient.get(environment.registroBeneficiario_url+id+'/ficha/medica')
    .pipe(
      map((resultados:any)=>{
        console.log(resultados);
        return resultados;
      })
      
    );
  }
  //metodo para consultar la lista de consultas nutricionales
  getConsultasNutricionales(id:any){
    return this.httpClient.get(environment.registroBeneficiario_url+id+'/ficha/nutricion/')
    .pipe(
      map((resultados:any)=>{
        return resultados;
      })
      
    );
  }
  //metodo para consultar la lista de consultas psicologicas
  getConsultasPsicologicas(id:any){
    return this.httpClient.get(environment.registroBeneficiario_url+id+'/ficha/psicologica/')
    .pipe(
      map((resultados:any)=>{
        console.log(resultados);
        return resultados;
      })
    );
  }
}
