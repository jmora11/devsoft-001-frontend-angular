import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Respuesta } from '../models/respuesta';
import { Observable } from 'rxjs';
import { BASE_ENDPOINT } from '../config/app';
import { Alumno } from '../models/alumno';
import { Examen } from '../models/examen';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  private baseEndpoint = BASE_ENDPOINT + '/responses';

  constructor(private http: HttpClient) { }

  crear(respuestas: Respuesta[]): Observable<Respuesta[]> {
    return this.http.post<Respuesta[]>(`${this.baseEndpoint}/add`, respuestas, {headers: this.cabeceras});
  }

  obtenerRespuestasPorAlumnoPorExamen(alumno: Alumno, examen: Examen): Observable<Respuesta[]> {
    return this.http.get<Respuesta[]>(`${this.baseEndpoint}/student/${alumno.id}/exam/${examen.id}`);
  }
}
