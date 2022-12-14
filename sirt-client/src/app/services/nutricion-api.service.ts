import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutricionApiService {

  constructor(private httpClient: HttpClient) { }

  //Servicio para guardar los datos medicos
  postDatosMedicos(form:any,id:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.registroBeneficiario_url +id+ '/ficha/nutricion/consulta/datos/medicos/', form)
  }
  //Servicio para guardar los datos antropometricos
  postDatosAntropometricos(form:any, id:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.registroBeneficiario_url +id+ '/ficha/nutricion/consulta/datos-antropometricos/', form)
  }
  //Servicio para guardar la historia dietetica
  postHistoriaDietetica(form:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.nutricion_url + 'historia-dietetica', form)
  }
  //Servicio para guardar los habitos de consumo
  postHabitosConsumo(form:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.nutricion_url + 'habitos-consumo', form)
  }
  //servicio para guardar el recordatorio de 24 horas
  postRecordatorio24H(form:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.nutricion_url + 'recordatorio-24h', form)
  }
  //Servicio para guardar el examen de laboratorio
  postExamenLaboratorio(form:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.nutricion_url + 'examenes-laboratorio', form)
  }
  //servicio para editar los datos medicos
  editarDatosMedicos(form:any, id:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.nutricion_url + 'datos/medicos/'+id, form)
  }
  //servicio para editar los datos antropometricos
  editarDatosAntro(form:any, id:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.nutricion_url + 'datos-antropometricos/'+id+'/edit', form)
  }
  //servico para editar la historia dietetica
  editarHistoriaDietetica(form:any, id:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.nutricion_url + 'historia-dietetica/'+id+'/edit', form)
  }
  //Servico para editar los habitos de consumo
  editarHabitosConsumo(form:any, id:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.nutricion_url + 'habitos-consumo/'+id+'/edit', form)
  }
  //Servicio para editar el recordatorio de 24 horas
  editarRecordatorio24H(form:any, id:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.nutricion_url + 'recordatorio-24h/'+id, form)
  }
  //servicio para consultar los datos medicos de una consulta
  getDatosMedicos(id:any){
    return this.httpClient.get(environment.nutricion_url+ 'datos/medicos/' + id)
    .pipe(
      map((resultados:any)=>{
        return resultados;
      })
      
    );
  }
  //servicio para consultar los datos antropometricos
  getDatosAntropometricos(id:any){
    return this.httpClient.get(environment.nutricion_url+ 'datos-antropometricos/' + id)
    .pipe(
      map((resultados:any)=>{
        console.log(resultados);
        return resultados;
      })
      
    );
  }
  //servicio para consultar la historia dietetica
  getHistoriaDietetica(id:any){
    return this.httpClient.get(environment.nutricion_url+ 'historia-dietetica/' + id)
    .pipe(
      map((resultados:any)=>{
        console.log(resultados);
        return resultados;
      })
      
    );
  }
  //servicio para consultar los habitos de consumo
  getHabitosConsumo(id:any){
    return this.httpClient.get(environment.nutricion_url+ 'habitos-consumo/' + id)
    .pipe(
      map((resultados:any)=>{
        console.log(resultados);
        return resultados;
      })
      
    );
  }
  //servicio para consultar el recordatorio de 24 horas
  getRecordatorio24H(id:any){
    return this.httpClient.get(environment.nutricion_url+ 'recordatorio-24h/' + id)
    .pipe(
      map((resultados:any)=>{
        console.log(resultados);
        return resultados;
      })
      
    );
  }
  //servicio para consultar el recordatorio de 24 horas
  getListaAlimentos(){
    return this.httpClient.get('https://sirt-igf115-prn315.herokuapp.com/ficha/nutricion/alimentos/')
    .pipe(
      map((resultados:any)=>{
        return resultados;
      })
      
    );
  }

}
