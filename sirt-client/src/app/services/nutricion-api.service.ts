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
  postDatosMedicos(form:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.nutricion_url + 'datos', form)
  }
  //Servicio para guardar los datos antropometricos
  postDatosAntropometricos(form:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.nutricion_url + 'datos-antropometricos', form)
  }
  //Servicio para guardar la historia dietetica
  postHistoriaDietetica(form:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.nutricion_url + 'historia-dietetica', form)
  }
  //Servicio para guardar los habitps de consumo
  postHabitosConsumo(form:any):Observable<ResponseI>{
    return this.httpClient.post<ResponseI>(environment.nutricion_url + 'habitos-consumo', form)
  }
}
